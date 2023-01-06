# @jayree/sfdx-plugin-legacy

A Salesforce CLI plugin containing all jayree legacy commands.

[![sfdx](https://img.shields.io/badge/cli-sfdx-brightgreen.svg)](https://developer.salesforce.com/tools/sfdxcli)
[![Version](https://img.shields.io/npm/v/@jayree/sfdx-plugin-legacy.svg)](https://npmjs.org/package/@jayree/sfdx-plugin-legacy)
[![test-and-release](https://github.com/jayree/sfdx-plugin-manifest/actions/workflows/release.yml/badge.svg)](https://github.com/jayree/sfdx-plugin-manifest/actions/workflows/release.yml)
[![Downloads/week](https://img.shields.io/npm/dw/@jayree/sfdx-plugin-legacy.svg)](https://npmjs.org/package/@jayree/sfdx-plugin-legacy)
[![License](https://img.shields.io/npm/l/@jayree/sfdx-plugin-legacy.svg)](https://github.com/jayree-plugins/sfdx-plugin-manifest/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

## Usage

<!-- usage -->
```sh-session
$ sfdx plugins:install @jayree/sfdx-plugin-legacy
$ sfdx jayree:[COMMAND]
running command...
$ sfdx plugins
@jayree/sfdx-plugin-legacy 1.1.18
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

_See code: [src/commands/jayree/automation/changeset/deploy.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.18/src/commands/jayree/automation/changeset/deploy.ts)_

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

_See code: [src/commands/jayree/automation/changeset/list.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.18/src/commands/jayree/automation/changeset/list.ts)_

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

_See code: [src/commands/jayree/automation/ltngsync/status.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.18/src/commands/jayree/automation/ltngsync/status.ts)_

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

_See code: [src/commands/jayree/packagedescription/create.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.18/src/commands/jayree/packagedescription/create.ts)_

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

_See code: [src/commands/jayree/packagedescription/get.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.18/src/commands/jayree/packagedescription/get.ts)_

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

_See code: [src/commands/jayree/packagedescription/remove.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.18/src/commands/jayree/packagedescription/remove.ts)_

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

_See code: [src/commands/jayree/packagedescription/set.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.18/src/commands/jayree/packagedescription/set.ts)_
<!-- commandsstop -->
