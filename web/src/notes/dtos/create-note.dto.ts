import { IsString, IsNumber } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  name: string;
  @IsString()
  content: string;
  @IsNumber()
  categoryId: number;
}
