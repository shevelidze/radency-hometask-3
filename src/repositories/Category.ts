interface CategoryData {
  id: string;
  name: string;
}

const categoriesData: CategoryData[] = [
  {
    id: 'task',
    name: 'Task',
  },
  {
    id: 'thought',
    name: 'RandomThought',
  },
  {
    id: 'idea',
    name: 'Idea',
  },
];

export default class Category implements CategoryData {
  public constructor(id: CategoryData['id']) {
    const data = categoriesData.find((categoryData) => categoryData.id === id);

    if (data === undefined)
      throw new Error(`Failed to find a category with the id ${id}.`);

    Object.assign(this, data);
  }
  id: CategoryData['id'];
  name: CategoryData['name'];
}
