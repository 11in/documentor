module.exports = {
    configFunction: (conf, options) => {
        let {engine, container, changeClass} = require('./src/markdown')
        options = Object.assign({
            admonitions: [],
            markdown: null, // This needs a callback to do anything
            mdAnchorOptions: {},
            mdTocOptions: {},
            mdEmojiOptions: {},
            syntaxHighlightOptions: {},
            footnotesOptions: {},
        }, options)

        // Define custom admonitions
        if (Array.isArray(options.admonitions)) {
            options.admonitions.forEach(a => {
                let {key, className} = a
                if (!key) return
                // Default className to key
                if (!className) className = key
                engine.use(container, key, changeClass(className))
            })
        }

        engine
            // This adds anchors to headings so they can be linked to
            .use(require('markdown-it-anchor'), options.mdAnchorOptions)
            // This allows inserting a table of contents
            .use(require('markdown-it-toc-done-right'), Object.assign({
                listType: 'ul',
            }, options.mdTocOptions))
            // This allows using :emoji-tags:
            .use(require('markdown-it-emoji'), options.mdEmojiOptions)

        if ('function' === typeof options.markdown) {
            // allow users to pass a callback that modifies the engine
            engine = options.markdown(engine)
        }
        // Set 11ty markdown library to our custom one
        conf.setLibrary('md', engine)

        // Add markdown filters
        require('./src/filters')(conf, engine)

        /* EXTERNAL PLUGINS */
        conf.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'), options.syntaxHighlightOptions)
        conf.addPlugin(require('eleventy-plugin-reader-bar'))
        conf.addPlugin(require('eleventy-plugin-footnotes'), options.footnotesOptions)
    }
}
