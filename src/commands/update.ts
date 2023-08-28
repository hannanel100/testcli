import {Args, Command, Flags} from '@oclif/core';

export default class Update extends Command {
  static description = 'describe the command here';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  };

  static args = {
    todoId: Args.string({description: 'todo to update'}),
  };

  public async run(): Promise<void> {
    const {args} = await this.parse(Update);

    const file = args.todoId;
    if (file) {
      this.log(`you input --file=${file}`);
    } else {
      this.error('No file provided');
    }
  }
}
