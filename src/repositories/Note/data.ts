import crypto from 'crypto';
import Category from '../Category';

export interface NoteData {
  id: string;
  name: string;
  content: string;
  categoryId: Category['id'];
  creationDate: Date;
  isArchived: boolean;
}

export const notesData: NoteData[] = [];

notesData.push(
  {
    id: crypto.randomUUID(),
    name: 'Shopping',
    categoryId: 'task',
    content: 'Go shopping on 02/03/2022 or 05.03.2022.',
    isArchived: false,
    creationDate: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Dantist appointment',
    categoryId: 'task',
    content: `I’m gonna have a dentist appointment on the 3/5/2021,
I moved it from 5/5/2021`,
    isArchived: false,
    creationDate: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Note #3',
    content: 'Content of the note #2',
    categoryId: 'thought',
    isArchived: false,
    creationDate: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Note #4',
    content: 'Content of the note #4',
    categoryId: 'idea',
    isArchived: false,
    creationDate: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Note #5',
    content: 'Content of the note #5',
    categoryId: 'task',
    isArchived: false,
    creationDate: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Note #6',
    content: 'Content of the note #6',
    categoryId: 'thought',
    isArchived: true,
    creationDate: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Note #7',
    content: 'Content of the note #7',
    categoryId: 'idea',
    isArchived: true,
    creationDate: new Date(),
  }
);
