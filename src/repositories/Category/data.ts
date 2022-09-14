export interface CategoryData {
  id: string;
  name: string;
}

export const categoriesData: CategoryData[] = [];

categoriesData.push(
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
  }
);
