import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseUrl } from './configs/keys';

@Module({
  imports: [NotesModule, SequelizeModule.forRoot({ uri: databaseUrl })],
})
export class AppModule {}
