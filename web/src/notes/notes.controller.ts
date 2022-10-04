import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { NotesService } from './notes.service';

class NoteNotFoundError extends HttpException {
  constructor() {
    super('Failed to find a note with the such id.', HttpStatus.NOT_FOUND);
  }
}

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}
  @Get(':id')
  async getOneNote(@Param('id') id: string) {
    const note = await this.notesService.getOne(id);
    if (note === null) throw new NoteNotFoundError();
    return note;
  }
  @Get()
  async getAllNotes() {
    return await this.notesService.getAll();
  }
}
