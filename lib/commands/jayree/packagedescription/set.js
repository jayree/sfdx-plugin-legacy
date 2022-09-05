/*
 * Copyright (c) 2021, jayree
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';
import AdmZip from 'adm-zip';
import { js2Manifest, parseManifest } from '../../../utils/xml.js';
Messages.importMessagesDirectory(new URL('./', import.meta.url).pathname);
const messages = Messages.loadMessages('@jayree/sfdx-plugin-legacy', 'setpackagedescription');
export default class SetPackageDescription extends SfdxCommand {
    // eslint-disable-next-line @typescript-eslint/require-await
    async run() {
        const inputfile = this.args.file || this.flags.file;
        const newZip = new AdmZip();
        const zip = new AdmZip(inputfile);
        const zipEntries = zip.getEntries();
        const text = this.flags.description.replace(/\\n/g, '\n');
        let action;
        zipEntries.forEach((zipEntry) => {
            const fileName = zipEntry.entryName;
            const fileContent = zip.readFile(fileName);
            if (fileName.includes('package.xml')) {
                const fileTXTContent = zip.readAsText(fileName);
                const xml = parseManifest(fileTXTContent);
                if (xml.Package.description && xml.Package.description.length > 0) {
                    action = 'updated';
                }
                else {
                    action = 'added';
                }
                xml.Package['description'] = text;
                this.ux.log(action + ' description: ' + text);
                newZip.addFile(fileName, Buffer.from(js2Manifest({ Package: xml.Package })), '', 0o644);
            }
            else {
                newZip.addFile(fileName, fileContent, '', 0o644);
            }
        });
        newZip.writeZip(inputfile);
        return { description: text, task: action };
    }
}
// hotfix to receive only one help page
// public static hidden = true;
SetPackageDescription.description = messages.getMessage('commandDescription');
SetPackageDescription.examples = [
    `$ sfdx jayree:packagedescription:set --file FILENAME --description 'NEW DESCRIPTION'
    `,
];
SetPackageDescription.args = [{ name: 'file' }];
SetPackageDescription.flagsConfig = {
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
SetPackageDescription.requiresUsername = false;
SetPackageDescription.supportsDevhubUsername = false;
SetPackageDescription.requiresProject = false;
//# sourceMappingURL=set.js.map