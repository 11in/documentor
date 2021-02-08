# Scribe

This is a collection of tools for _doing writing_ in an 11ty website. It is an opinionated collection, and while it
offers the option to customize parts it doesn't allow you to turn parts of:
It's kind of all or nothing. Still, it's mostly a package for existing plugins + a few small tools, so if you really
want only part of it you can just pull that part out and use what you need.

## Installing

First, you have to install the package:

```shell
$ npm i @11in/scribe
```

Add the plugin to your 11ty project.
If you're using [Elfin](https://github.com/11in/elfin) you can just add it to your `11ty/plugins/loader.js`:

```js
module.exports = conf => {
    conf.addPlugin(require('@11in/scribe'))
}
```

That's it!

## Features & Usage

For more details on how to use and customize Scribe, [see the documentation](https://11in.alwaysblank.dev/docs/scribe/).
