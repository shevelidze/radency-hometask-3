export class InvalidNoteIdError extends Error {
  constructor(id: string) {
    super(`Failed to find a note with the id ${id}.`);
  }
}
