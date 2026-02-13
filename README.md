# @jayree/sfdx-plugin-legacy

A Salesforce CLI plugin containing all jayree legacy commands.

[![sfdx](https://img.shields.io/badge/cli-sfdx-brightgreen.svg)](https://developer.salesforce.com/tools/sfdxcli)
[![Version](https://img.shields.io/npm/v/@jayree/sfdx-plugin-legacy.svg)](https://npmjs.org/package/@jayree/sfdx-plugin-legacy)
[![test-and-release](https://github.com/jayree/sfdx-plugin-manifest/actions/workflows/release.yml/badge.svg)](https://github.com/jayree/sfdx-plugin-manifest/actions/workflows/release.yml)
[![Downloads/week](https://img.shields.io/npm/dw/@jayree/sfdx-plugin-legacy.svg)](https://npmjs.org/package/@jayree/sfdx-plugin-legacy)
[![License](https://img.shields.io/npm/l/@jayree/sfdx-plugin-legacy.svg)](https://github.com/jayree-plugins/sfdx-plugin-manifest/blob/main/package.json)

## Install

```bash
sfdx plugins:install @jayree/sfdx-plugin-legacy
```

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
  $ sfdx jayree:automation:changeset:deploy

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

_See code: [src/commands/jayree/automation/changeset/deploy.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.161/src/commands/jayree/automation/changeset/deploy.ts)_

### `sfdx jayree:automation:changeset:list`

list incomming change sets of an org (beta)

```
USAGE
  $ sfdx jayree:automation:changeset:list

DESCRIPTION
  list incomming change sets of an org (beta)
```

_See code: [src/commands/jayree/automation/changeset/list.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.161/src/commands/jayree/automation/changeset/list.ts)_

### `sfdx jayree:automation:ltngsync:status`

check the Lightning Sync User Sync Status and reset sync if needed (beta)

```
USAGE
  $ sfdx jayree:automation:ltngsync:status

DESCRIPTION
  check the Lightning Sync User Sync Status and reset sync if needed (beta)

EXAMPLES
  $ sfdx jayree:automation:ltngsync:status -o 'Name'
  configSetup: User assigned to active Lightning Sync configuration... Yes
  userContacts/userEvents: Salesforce and Exchange email addresses linked... Linked/Linked
  userContacts/userEvents: Salesforce to Exchange sync status... Initial sync completed/Initial sync completed
  userContacts/userEvents: Exchange to Salesforce sync status... Initial sync completed/Initial sync completed
```

_See code: [src/commands/jayree/automation/ltngsync/status.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.161/src/commands/jayree/automation/ltngsync/status.ts)_

### `sfdx jayree:packagedescription:create`

creates an empty package with the description

```
USAGE
  $ sfdx jayree:packagedescription:create [FILE]

DESCRIPTION
  creates an empty package with the description

EXAMPLES
  $ sfdx jayree:packagedescription:create --file FILENAME --description 'DESCRIPTION'
```

_See code: [src/commands/jayree/packagedescription/create.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.161/src/commands/jayree/packagedescription/create.ts)_

### `sfdx jayree:packagedescription:get`

get the description within a package

```
USAGE
  $ sfdx jayree:packagedescription:get [FILE]

DESCRIPTION
  get the description within a package

EXAMPLES
  $ sfdx jayree:packagedescription:get --file FILENAME
  Description of Package FILENAME
```

_See code: [src/commands/jayree/packagedescription/get.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.161/src/commands/jayree/packagedescription/get.ts)_

### `sfdx jayree:packagedescription:remove`

remove the description within a package

```
USAGE
  $ sfdx jayree:packagedescription:remove [FILE]

DESCRIPTION
  remove the description within a package

EXAMPLES
  $ sfdx jayree:packagedescription:remove --file FILENAME
```

_See code: [src/commands/jayree/packagedescription/remove.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.161/src/commands/jayree/packagedescription/remove.ts)_

### `sfdx jayree:packagedescription:set`

set the description within a package

```
USAGE
  $ sfdx jayree:packagedescription:set [FILE]

DESCRIPTION
  set the description within a package

EXAMPLES
  $ sfdx jayree:packagedescription:set --file FILENAME --description 'NEW DESCRIPTION'
```

_See code: [src/commands/jayree/packagedescription/set.ts](https://github.com/jayree/sfdx-plugin-legacy/blob/v1.1.161/src/commands/jayree/packagedescription/set.ts)_
<!-- commandsstop -->
