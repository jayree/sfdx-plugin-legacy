/*
 * Copyright (c) 2021, jayree
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { XMLParser, XMLBuilder } from 'fast-xml-parser';

const XML_DECL = '<?xml version="1.0" encoding="UTF-8"?>\n';
const XML_NS_KEY = '@_xmlns';
const XML_NS_URL = 'http://soap.sforce.com/2006/04/metadata';

export function parseManifest(xmlData: string) {
  const parser = new XMLParser({
    stopNodes: ['version'],
    parseTagValue: false,
  });
  return parser.parse(xmlData);
}

export function js2Manifest(jsData) {
  const js2Xml = new XMLBuilder({ format: true, indentBy: '    ', ignoreAttributes: false });
  jsData.Package[XML_NS_KEY] = XML_NS_URL;
  return XML_DECL.concat(js2Xml.build(jsData));
}

const XML_DECL_KEY = '?xml';

export function js2SourceComponent(jsData) {
  const js2Xml = new XMLBuilder({ format: true, indentBy: '    ', ignoreAttributes: false });
  delete jsData[XML_DECL_KEY];
  return XML_DECL.concat(js2Xml.build(jsData));
}

export function parseSourceComponent(xmlData: string) {
  const parser = new XMLParser({
    ignoreAttributes: false,
    parseTagValue: false,
  });
  return parser.parse(xmlData);
}

export function normalizeToArray<T>(entryOrArray: T | T[] | undefined): T[] {
  if (entryOrArray) {
    return Array.isArray(entryOrArray) ? entryOrArray : [entryOrArray];
  }
  return [];
}
