/*
 * Copyright (c) 2021, jayree
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';
import AdmZip from 'adm-zip';
import { parseManifest } from '../../../utils/xml.js';
// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);
Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@jayree/sfdx-plugin-legacy', 'getpackagedescription');
export default class GetPackageDescription extends SfdxCommand {
    // eslint-disable-next-line @typescript-eslint/require-await
    async run() {
        const inputfile = this.args.file || this.flags.file;
        const zip = new AdmZip(inputfile);
        const zipEntries = zip.getEntries();
        let text;
        zipEntries.forEach((zipEntry) => {
            const fileName = zipEntry.entryName;
            if (fileName.includes('package.xml')) {
                const fileContent = zip.readAsText(fileName);
                const xml = parseManifest(fileContent);
                text = xml.Package.description ? xml.Package.description.toString() : '';
                this.ux.log(text);
            }
        });
        return { description: text };
    }
}
// hotfix to receive only one help page
// public static hidden = true;
GetPackageDescription.description = messages.getMessage('commandDescription');
GetPackageDescription.examples = [
    `$ sfdx jayree:packagedescription:get --file FILENAME
Description of Package FILENAME
    `,
];
GetPackageDescription.args = [{ name: 'file' }];
GetPackageDescription.flagsConfig = {
    file: flags.string({
        char: 'f',
        description: messages.getMessage('fileFlagDescription'),
        required: true,
    }),
};
GetPackageDescription.requiresUsername = false;
GetPackageDescription.supportsDevhubUsername = false;
GetPackageDescription.requiresProject = false;
//# sourceMappingURL=get.js.map