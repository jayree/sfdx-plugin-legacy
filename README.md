# @jayree/sfdx-plugin-legacy

jayree sfdx legacy commands

[![sfdx](https://img.shields.io/badge/cli-sfdx-brightgreen.svg)](https://developer.salesforce.com/tools/sfdxcli)
[![Version](https://img.shields.io/npm/v/@jayree/sfdx-plugin-legacy.svg)](https://npmjs.org/package/@jayree/sfdx-plugin-legacy)
[![test-and-release](https://github.com/jayree/sfdx-plugin-manifest/actions/workflows/release.yml/badge.svg)](https://github.com/jayree/sfdx-plugin-manifest/actions/workflows/release.yml)
[![Downloads/week](https://img.shields.io/npm/dw/@jayree/sfdx-plugin-legacy.svg)](https://npmjs.org/package/@jayree/sfdx-plugin-legacy)
[![License](https://img.shields.io/npm/l/@jayree/sfdx-plugin-legacy.svg)](https://github.com/jayree-plugins/sfdx-plugin-manifest/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Hooks](#hooks)
* [Related Plugins](#related-plugins)
<!-- tocstop -->

## Usage

<!-- usage -->
```sh-session
$ sfdx plugins:install @jayree/sfdx-plugin-legacy
$ sfdx jayree:[COMMAND]
running command...
$ sfdx plugins
@jayree/sfdx-plugin-legacy 1.0.0
$ sfdx help jayree:[COMMAND]
USAGE
  $ sfdx jayree:COMMAND
...
```
<!-- usagestop -->

## Commands

<!-- commands -->
* [`sfdx jayree:automation:changeset:deploy`](#sfdx-jayreeautomationchangesetdeploy)
* [`sfdx jayree:automation:changeset:list`](#sfdx-jayreeautomationchangesetlist)
* [`sfdx jayree:automation:ltngsync:status`](#sfdx-jayreeautomationltngsyncstatus)
* [`sfdx jayree:packagedescription:create`](#sfdx-jayreepackagedescriptioncreate)
* [`sfdx jayree:packagedescription:get`](#sfdx-jayreepackagedescriptionget)
* [`sfdx jayree:packagedescription:remove`](#sfdx-jayreepackagedescriptionremove)
* [`sfdx jayree:packagedescription:set`](#sfdx-jayreepackagedescriptionset)

### `sfdx jayree:automation:changeset:deploy`

deploy incomming change set to an org (beta)

```
USAGE
  $ sfdx jayree:automation:changeset:deploy [-r <string> -l <string>] [-c] [--nodialog -s <string>] [-u <string>] [--apiversion
    <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -c, --checkonly                                                                   validate deploy but don’t save to
                                                                                    the org (default:false)
  -l, --testlevel=<option>                                                          deployment testing level
                                                                                    (Default,RunSpecifiedTests,RunLocalT
                                                                                    ests,RunAllTestsInOrg)
                                                                                    <options: Default|RunSpecifiedTests|
                                                                                    RunLocalTests|RunAllTestsInOrg>
  -r, --runtests=<value>                                                            tests to run if --testlevel
                                                                                    RunSpecifiedTests
  -s, --changeset=<value>                                                           name of changeset to deploy
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --nodialog                                                                        don't show the dialog wizard

DESCRIPTION
  deploy incomming change set to an org (beta)

EXAMPLES
  $ sfdx jayree:automation:changeset:deploy -s ChangeSet -l RunLocalTests --nodialog
  Deploying Change Set 'ChangeSet'...
  === Status
  Status: Pending
  jobid:  0Xxx100000xx1x1

  $ sfdx jayree:automation:changeset:deploy
  ? Change Sets Awaiting Deployment (Use arrow keys)
    ChangeSet3
    ChangeSet2
  ❯ ChangeSet1
```

_See code: [src/src/commands/jayree/automation/changeset/deploy.ts](https://github.com/jayree/sfdx-jayree-plugin/blob/v1.0.0/src/src/commands/jayree/automation/changeset/deploy.ts)_

### `sfdx jayree:automation:changeset:list`

list incomming change sets of an org (beta)

```
USAGE
  $ sfdx jayree:automation:changeset:list [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  list incomming change sets of an org (beta)
```

_See code: [src/src/commands/jayree/automation/changeset/list.ts](https://github.com/jayree/sfdx-jayree-plugin/blob/v1.0.0/src/src/commands/jayree/automation/changeset/list.ts)_

### `sfdx jayree:automation:ltngsync:status`

check the Lightning Sync User Sync Status and reset sync if needed (beta)

```
USAGE
  $ sfdx jayree:automation:ltngsync:status -o <string> [-s] [-w <integer>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -o, --officeuser=<value>                                                          (required) 'name' (firstname
                                                                                    lastname) of the SF user
  -s, --statusonly                                                                  get Lightning Sync status of the SF
                                                                                    user, only
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                wait time for command to wait for
                                                                                    status change in minutes (default:
                                                                                    infinitely)
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  check the Lightning Sync User Sync Status and reset sync if needed (beta)

EXAMPLES
  $ sfdx jayree:automation:ltngsync:status -o 'Name'
  configSetup: User assigned to active Lightning Sync configuration... Yes
  userContacts/userEvents: Salesforce and Exchange email addresses linked... Linked/Linked
  userContacts/userEvents: Salesforce to Exchange sync status... Initial sync completed/Initial sync completed
  userContacts/userEvents: Exchange to Salesforce sync status... Initial sync completed/Initial sync completed
```

_See code: [src/src/commands/jayree/automation/ltngsync/status.ts](https://github.com/jayree/sfdx-jayree-plugin/blob/v1.0.0/src/src/commands/jayree/automation/ltngsync/status.ts)_

### `sfdx jayree:packagedescription:create`

creates an empty package with the description

```
USAGE
  $ sfdx jayree:packagedescription:create (-d <string> -f <string>) [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --description=<value>                                                         (required) new description value
  -f, --file=<value>                                                                (required) file to create
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  creates an empty package with the description

EXAMPLES
  $ sfdx jayree:packagedescription:create --file FILENAME --description 'DESCRIPTION'
```

_See code: [src/src/commands/jayree/packagedescription/create.ts](https://github.com/jayree/sfdx-jayree-plugin/blob/v1.0.0/src/src/commands/jayree/packagedescription/create.ts)_

### `sfdx jayree:packagedescription:get`

get the description within a package

```
USAGE
  $ sfdx jayree:packagedescription:get -f <string> [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --file=<value>                                                                (required) file to read
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  get the description within a package

EXAMPLES
  $ sfdx jayree:packagedescription:get --file FILENAME
  Description of Package FILENAME
```

_See code: [src/src/commands/jayree/packagedescription/get.ts](https://github.com/jayree/sfdx-jayree-plugin/blob/v1.0.0/src/src/commands/jayree/packagedescription/get.ts)_

### `sfdx jayree:packagedescription:remove`

remove the description within a package

```
USAGE
  $ sfdx jayree:packagedescription:remove -f <string> [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --file=<value>                                                                (required) file to read
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  remove the description within a package

EXAMPLES
  $ sfdx jayree:packagedescription:remove --file FILENAME
```

_See code: [src/src/commands/jayree/packagedescription/remove.ts](https://github.com/jayree/sfdx-jayree-plugin/blob/v1.0.0/src/src/commands/jayree/packagedescription/remove.ts)_

### `sfdx jayree:packagedescription:set`

set the description within a package

```
USAGE
  $ sfdx jayree:packagedescription:set (-d <string> -f <string>) [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --description=<value>                                                         (required) new description value
  -f, --file=<value>                                                                (required) file to read
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  set the description within a package

EXAMPLES
  $ sfdx jayree:packagedescription:set --file FILENAME --description 'NEW DESCRIPTION'
```

_See code: [src/src/commands/jayree/packagedescription/set.ts](https://github.com/jayree/sfdx-jayree-plugin/blob/v1.0.0/src/src/commands/jayree/packagedescription/set.ts)_
<!-- commandsstop -->

## Hooks

The following hooks are triggered after running `force:source:retrieve` or `force:source:pull`. They extend both standard commands with the same logic as `jayree:source:retrieve:all` and `jayree:source:retrieve:full`.

### Enable/Disable

Set the following parameter in `.sfdx-plugin-legacy.json` to enable (true) or disable (false) the hooks:

```json
{
  "runHooks": true,
}
```

### Hook flow

![Hooks Flow](images/jayree_hooks_flow.svg)

#### prerun

- Resets source tracking using `force:source:tracking:reset` before executing `force:source:pull`.

> **_IMPORTANT:_** This hook will only run if  `SFDX_ENABLE_JAYREE_HOOKS_RESET_BEFORE_PULL=true` is set. It uses the stored `serverMaxRevisionCounter` as revision counter number (see: [`jayree:source:tracking:store:set`](#sfdx-plugin-legacysourcetrackingstoreset)). If the hook doesn't find a stored value it asks if the current *local* revision counter number should be stored and used.

#### preretrieve

- Disables the `prettierFormat` hook. See [sfdx-plugin-prettier](https://github.com/jayree/sfdx-plugin-prettier) for more details.

#### postretrieve (plugin-source plugin) / postsourceupdate (legacy salesforce-alm plugin)

- Re-retrieves Profiles if `source:pull` triggered the hook.
- Ensures Object- and User-Permissions settings. Review [.sfdx-plugin-legacy-example.json](.sfdx-plugin-legacy-example.json) how the configuration should look like.
- Shrinks Permission Sets to avoid merge conflicts in git.
- Applies source fixes of the `jayree:source:fix` command and moves source files to separate package directories. See the configuration file [.sfdx-plugin-legacy-example.json](.sfdx-plugin-legacy-example.json) for examples. Use the following parameter in `.sfdx-plugin-legacy.json` to specify which tags should be applied by the hooks:
```json
{
  "applySourceFixes": ["source:retrieve:full", "source:retrieve:all"],
}
```

> **_IMPORTANT:_** Since the hook is not able to update the (JSON) output of the command, an additional output is generated. Set the environment variable `SFDX_ENABLE_JAYREE_HOOKS_JSON_OUTPUT=true` and additional comma-separated JSON output will be appended, where the output must be parsed as an array, e.g. ``JSON.parse(`[${stdout}]`)``. See an example below:

```javascript
import * as execa from 'execa';
import { cli } from 'cli-ux';

async function run() {
    const { stdout } = await execa('sfdx', [
        'force:source:retrieve',
        '--metadata="Group:*"',
        '--json'
    ]);
    const parsedStdout = JSON.parse(`[${stdout}]`);
        let consolidatedStdout: {
          result: {
            pulledSource?: any[];
            inboundFiles?: any[];
            fixedFiles?: any[];
          };
        };
    if (parsedStdout.length > 1) {
        const pulledSourceOrinboundFiles =
            parsedStdout[0].result?.pulledSource !== undefined
                ? 'pulledSource'
                : 'inboundFiles';
        consolidatedStdout = {
            ...parsedStdout[0],
            result: {
                ...parsedStdout[0].result,
                [pulledSourceOrinboundFiles]: [],
                fixedFiles: []
            }
        };
        parsedStdout.shift();
        parsedStdout.forEach((element) => {
            consolidatedStdout.result[
                pulledSourceOrinboundFiles
            ] = consolidatedStdout.result[pulledSourceOrinboundFiles].concat(
                element.result[pulledSourceOrinboundFiles]
            );
            consolidatedStdout.result.fixedFiles = consolidatedStdout.result.fixedFiles.concat(
                element.result.fixedFiles
            );
        });
    } else {
        consolidatedStdout = parsedStdout[0];
    }
    cli.styledJSON(consolidatedStdout);
}
}

run();
```

- Calls `prettierFormat` hook. See [sfdx-plugin-prettier](https://github.com/jayree/sfdx-plugin-prettier) for more details.

## Related Plugins

- [@jayree/sfdx-plugin-legacy](https://github.com/jayree/sfdx-plugin-manifest/blob/main/README.md) - Contains all jayree sfdx manifest commands
- [@jayree/sfdx-plugin-prettier](https://github.com/jayree/sfdx-plugin-prettier/blob/develop/README.md) - Contains an sfdx plugin hook to format Salesforce metadata source files
