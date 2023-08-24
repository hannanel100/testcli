import {Args, Command, Flags} from '@oclif/core';
import chalk from 'chalk';
import {saveData} from '../api';
export default class Add extends Command {
  static description = 'describe the command here';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  };

  static args = {
    todo: Args.string({description: 'todo to add'}),
  };

  public async run(): Promise<void> {
    const {args} = await this.parse(Add);

    const todo = args.todo;
    if (todo) {
      const res: {success: boolean} = await saveData(todo);
      if (res.success) {
        this.log(`${chalk.green('Todo added successfully')}`);
      }
    } else {
      this.error(`${chalk.red('No todo provided')}`);
    }
  }
}
