/*
 * Copyright (c) 2021, jayree
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';
import AdmZip from 'adm-zip';
import { js2Manifest } from '../../../utils/xml.js';
Messages.importMessagesDirectory(new URL('./', import.meta.url).pathname);
const messages = Messages.loadMessages('@jayree/sfdx-plugin-legacy', 'createpackagedescription');
export default class CreatePackageDescription extends SfdxCommand {
    // eslint-disable-next-line @typescript-eslint/require-await
    async run() {
        const inputfile = this.args.file || this.flags.file;
        const newZip = new AdmZip();
        const text = this.flags.description.replace(/\\n/g, '\n');
        const fileContentjs = {
            Package: {
                description: [text],
                version: ['52.0'],
            },
        };
        newZip.addFile('unpackaged/package.xml', Buffer.from(js2Manifest(fileContentjs)), '', 0o644);
        newZip.writeZip(inputfile);
        // this.ux.log(newZip.getEntries()[0].header.toString());
        this.ux.log(text);
        return { description: text, task: 'created' };
    }
}
// hotfix to receive only one help page
// public static hidden = true;
CreatePackageDescription.description = messages.getMessage('commandDescription');
CreatePackageDescription.examples = [
    `$ sfdx jayree:packagedescription:create --file FILENAME --description 'DESCRIPTION'
    `,
];
CreatePackageDescription.args = [{ name: 'file' }];
CreatePackageDescription.flagsConfig = {
    file: flags.string({
        char: 'f',
        description: messages.getMessage('fileFlagDescription'),
        required: true,
    }),
    description: flags.string({
        char: 'd',
        description: messages.getMessage('descriptionFlagDescription'),
        dependsOn: ['file'],
        required: true,
    }),
};
CreatePackageDescription.requiresUsername = false;
CreatePackageDescription.supportsDevhubUsername = false;
CreatePackageDescription.requiresProject = false;
//# sourceMappingURL=create.js.map