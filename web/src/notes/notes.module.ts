import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './note.model';
import { Category } from './category.model';

@Module({
  imports: [SequelizeModule.forFeature([Note, Category])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
