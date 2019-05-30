'use strict';

var transformTools = require('browserify-transform-tools');

module.exports = transformTools.makeStringTransform(
    'domreadify',
    {
        jsFilesOnly: true
    },
    function(content, transformOptions, done) {
        done(null, 'window.addEventListener("DOMContentLoaded", function() {\n' + content + '\n});\n');
    }
);
