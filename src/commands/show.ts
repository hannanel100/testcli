import {Command, Flags} from '@oclif/core';
import {Todo, getData} from '../api';

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
    const todos: Todo[] = await getData();
    for (const todo of todos) {
      this.log(
        `${todo.id} - ${todo.text} - ${
          todo.isCompleted ? 'Completed' : 'Not Completed'
        }`,
      );
    }
  }
}
