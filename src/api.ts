// create a api that will be used to save, get and delete data from a json file

import fs from 'node:fs/promises';
export type Todo = {
  text: string;
  id: number;
  isCompleted: boolean;
};
export type Data = {
  todos: Todo[];
};
export async function saveData(todo: string): Promise<{success: boolean}> {
  try {
    const file = await fs.readFile('data.json', 'utf-8');
    const data: Data = JSON.parse(file);
    const id = data.todos.length + 1;
    const newTodo: Todo = {
      text: todo,
      id,
      isCompleted: false,
    };
    data.todos.push(newTodo);
    await fs.writeFile('data.json', JSON.stringify(data));
    return {success: true};
  } catch (error) {
    console.log(error);
    return {success: false};
  }
}

export async function getData(): Promise<Todo[]> {
  try {
    const file = await fs.readFile('data.json', 'utf-8');
    const data: Data = JSON.parse(file);
    return data.todos;
  } catch (error) {
    console.log(error);
    return [];
  }
}
