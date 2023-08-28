import {Command, Flags, ux} from '@oclif/core';
import {Todo, getData, updateStatus} from '../api';
import chalk from 'chalk';

export default class Show extends Command {
  static description = 'describe the command here';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  };

  public async run(): Promise<void> {
    // select from inquirer
    const {default: select} = await import('@inquirer/select')
    const todos: Todo[] = await getData();
    const choices = todos.map((todo) => ({
      name: `${todo.text} - ${todo.isCompleted ? 'Completed' : 'Not Completed'}`,
      value: todo.id,
    }));
    const id = await select({
      message: 'Select a todo to update',
      choices,
    });

    ux.action.start('Updating todo');
    // console.log(id)
    const res: {id: number, success: boolean} = await updateStatus(id);
    if (res.success) {
      // get todos id in todos array
      const todosId = todos.findIndex((todo) => todo.id === res.id);
      todos[todosId].isCompleted = !todos[todosId].isCompleted;
      ux.action.stop(chalk.green(`${todos[todosId].text} updated successfully ${todos[todosId].isCompleted ? 'now Completed' : 'now Not Completed'}}`));
    } else {
      ux.action.stop(chalk.red('Failed to update todo'));
    }
  }
}
