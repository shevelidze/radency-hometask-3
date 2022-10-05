import {
  Get,
  Post,
  Patch,
  Delete,
  Controller,
  Param,
  HttpException,
  HttpStatus,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import {
  InvalidCategoryIdError,
  NonExistingDeletingError,
  NonExistingUpdatingError,
  NotesService,
} from './notes.service';
import { CreateNoteDto } from './dtos/create-note.dto';
import { UpdateNoteDto } from './dtos/update-note.dto';

class NoteNotFoundHttpException extends HttpException {
  constructor() {
    super('Failed to find a note with the such id.', HttpStatus.NOT_FOUND);
  }
}

class InvalidCategoryIdHttpException extends HttpException {
  constructor() {
    super('Failed to find category with the such id.', HttpStatus.BAD_REQUEST);
  }
}

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}
  @Get('stats')
  async getStatistics() {
    return {
      statistics: await this.notesService.getStatistics(),
    };
  }
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const note = await this.notesService.getOne(id);
    if (note === null) throw new NoteNotFoundHttpException();
    return note;
  }
  @Get()
  async get() {
    return await this.notesService.getAll();
  }
  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    return {
      id: await this.handleInvalidCategoryIdError(() =>
        this.notesService.add(createNoteDto),
      ),
    };
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    await this.handleInvalidNoteIdError(() =>
      this.handleInvalidCategoryIdError(() =>
        this.notesService.update(id, updateNoteDto),
      ),
    );
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.handleInvalidNoteIdError(() => this.notesService.deleteOne(id));
  }
  private async handleInvalidCategoryIdError<T>(worker: () => Promise<T>) {
    try {
      return await worker();
    } catch (e) {
      if (e instanceof InvalidCategoryIdError) {
        throw new InvalidCategoryIdHttpException();
      } else throw e;
    }
  }
  private async handleInvalidNoteIdError<T>(worker: () => Promise<T>) {
    try {
      return await worker();
    } catch (e) {
      if (
        e instanceof NonExistingDeletingError ||
        e instanceof NonExistingUpdatingError
      ) {
        throw new NoteNotFoundHttpException();
      } else throw e;
    }
  }
}
