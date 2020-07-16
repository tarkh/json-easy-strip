"use strict";

/*
 * json-easy-strip
 * Strip JS-type comments from JSON, easy and fast!
 *
 * Created by tarkh
 * tarkh.com (C) 2020
 */

const fs = require('fs');
const path = require('path');

module.exports = file => {
    /*
     * Try to load and strip JSON file
     */
    try {
        /*
         * Resolve file path
         */
        const pathResolved = path.resolve(file);

        /*
         * Read file and convert buffer to string data
         */
        const data = (fs.readFileSync(pathResolved)).toString();

        /*
         * Strip all JS-style comments from data
         * with intelligent one-liner
         */
        const stripedData = data.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);

        /*
         * Parse string to JSON object and return
         */
        return JSON.parse(stripedData);
    } catch(err) {
        /*
         * If anything goes wrong - throw error
         */
        throw new Error(err);
    }
}
