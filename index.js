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

module.exports = (() => {
    // Main obj loader function
    const main = file => {
        // Set path resolved string
        const pr = path.resolve(file);

        // Check for cache
        if(main.cache[pr]) return main.cache[pr];

        // Read file and convert buffer to string data
        const d = (fs.readFileSync(pr)).toString();

        // Strip data
        const json = main.strip(d);

        // Set cache
        main.cache[pr] = json;

        // Return striped and parsed data
        return main.cache[pr];
    };

    // Extend main with data striper
    main.strip = data => JSON.parse(data.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m));

    // Extend main with cache obj
    main.cache = {};

    // Return main obj
    return main;
})();
