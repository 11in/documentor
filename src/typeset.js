/**
 * The following code is pull more or less directly from this:
 * @see https://github.com/johanbrook/eleventy-plugin-typeset
 * Unfortunately that plugin seems to be abandoned (and is also broken), so
 * util there's a new official solution I'll just replicate a working version
 * of it here.
 */
// https://github.com/davidmerfield/Typeset
const typeset = require('typeset');

/**
 * Apply Typeset.js to HTML content.
 *
 * @param {object} options Options object to feed into Typeset.
 * @see https://github.com/davidmerfield/Typeset#options
 */
module.exports = (options) => {
    return function applyTypeset(content, outputPath) {
        if (outputPath.endsWith('.html')) {
            const result = typeset(content, options);
            return result;
        }

        return content;
    };
};
