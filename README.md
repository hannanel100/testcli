oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g testcli
$ testcli COMMAND
running command...
$ testcli (--version)
testcli/0.0.0 linux-x64 node-v18.16.1
$ testcli --help [COMMAND]
USAGE
  $ testcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`testcli hello PERSON`](#testcli-hello-person)
* [`testcli hello world`](#testcli-hello-world)
* [`testcli help [COMMANDS]`](#testcli-help-commands)
* [`testcli plugins`](#testcli-plugins)
* [`testcli plugins:install PLUGIN...`](#testcli-pluginsinstall-plugin)
* [`testcli plugins:inspect PLUGIN...`](#testcli-pluginsinspect-plugin)
* [`testcli plugins:install PLUGIN...`](#testcli-pluginsinstall-plugin-1)
* [`testcli plugins:link PLUGIN`](#testcli-pluginslink-plugin)
* [`testcli plugins:uninstall PLUGIN...`](#testcli-pluginsuninstall-plugin)
* [`testcli plugins:uninstall PLUGIN...`](#testcli-pluginsuninstall-plugin-1)
* [`testcli plugins:uninstall PLUGIN...`](#testcli-pluginsuninstall-plugin-2)
* [`testcli plugins update`](#testcli-plugins-update)

## `testcli hello PERSON`

Say hello

```
USAGE
  $ testcli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/projects/testcli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `testcli hello world`

Say hello world

```
USAGE
  $ testcli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ testcli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/projects/testcli/blob/v0.0.0/dist/commands/hello/world.ts)_

## `testcli help [COMMANDS]`

Display help for testcli.

```
USAGE
  $ testcli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for testcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.17/src/commands/help.ts)_

## `testcli plugins`

List installed plugins.

```
USAGE
  $ testcli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ testcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/index.ts)_

## `testcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ testcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ testcli plugins add

EXAMPLES
  $ testcli plugins:install myplugin 

  $ testcli plugins:install https://github.com/someuser/someplugin

  $ testcli plugins:install someuser/someplugin
```

## `testcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ testcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ testcli plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/inspect.ts)_

## `testcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ testcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ testcli plugins add

EXAMPLES
  $ testcli plugins:install myplugin 

  $ testcli plugins:install https://github.com/someuser/someplugin

  $ testcli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/install.ts)_

## `testcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ testcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ testcli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/link.ts)_

## `testcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ testcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ testcli plugins unlink
  $ testcli plugins remove
```

## `testcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ testcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ testcli plugins unlink
  $ testcli plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/uninstall.ts)_

## `testcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ testcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ testcli plugins unlink
  $ testcli plugins remove
```

## `testcli plugins update`

Update installed plugins.

```
USAGE
  $ testcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/update.ts)_
<!-- commandsstop -->
