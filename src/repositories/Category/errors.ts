export class InvalidCategoryIdError extends Error {
  constructor(id: string) {
    super(`Failed to find a category with the id ${id}.`);
  }
}
