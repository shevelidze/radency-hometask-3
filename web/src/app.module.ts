import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseUrl } from './configs/keys';
import { Note } from './notes/note.model';
import { Category } from './notes/category.model';

@Module({
  imports: [
    NotesModule,
    SequelizeModule.forRoot({ uri: databaseUrl, models: [Note, Category] }),
  ],
})
export class AppModule {}
