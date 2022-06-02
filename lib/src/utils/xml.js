"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeToArray = exports.parseSourceComponent = exports.js2SourceComponent = exports.js2Manifest = exports.parseManifest = void 0;
/*
 * Copyright (c) 2021, jayree
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const fast_xml_parser_1 = require("fast-xml-parser");
const XML_DECL = '<?xml version="1.0" encoding="UTF-8"?>\n';
const XML_NS_URL = 'http://soap.sforce.com/2006/04/metadata';
const XML_NS_KEY = '@_xmlns';
function parseManifest(xmlData) {
    const parser = new fast_xml_parser_1.XMLParser({
        stopNodes: ['version'],
        parseTagValue: false,
    });
    return parser.parse(xmlData);
}
exports.parseManifest = parseManifest;
function js2Manifest(jsData) {
    const js2Xml = new fast_xml_parser_1.XMLBuilder({ format: true, indentBy: '    ', ignoreAttributes: false });
    jsData.Package[XML_NS_KEY] = XML_NS_URL;
    return XML_DECL.concat(js2Xml.build(jsData));
}
exports.js2Manifest = js2Manifest;
const XML_DECL_KEY = '?xml';
function js2SourceComponent(jsData) {
    const js2Xml = new fast_xml_parser_1.XMLBuilder({ format: true, indentBy: '    ', ignoreAttributes: false });
    delete jsData[XML_DECL_KEY];
    return XML_DECL.concat(js2Xml.build(jsData));
}
exports.js2SourceComponent = js2SourceComponent;
function parseSourceComponent(xmlData) {
    const parser = new fast_xml_parser_1.XMLParser({
        ignoreAttributes: false,
        parseTagValue: false,
    });
    return parser.parse(xmlData);
}
exports.parseSourceComponent = parseSourceComponent;
function normalizeToArray(entryOrArray) {
    if (entryOrArray) {
        return Array.isArray(entryOrArray) ? entryOrArray : [entryOrArray];
    }
    return [];
}
exports.normalizeToArray = normalizeToArray;
//# sourceMappingURL=xml.js.map