# grunt-localizable-strings-to-json

> Grunt plugin for convert Ios Localizeble.strings format to JSON format

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-localizable-strings-to-json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-localizable-strings-to-json');
```

## The "localizable_strings_to_json" task

### Overview
In your project's Gruntfile, add a section named `localizable_strings_to_json` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    localizable_strings_to_json: {
        options: {
            // Task-specific options go here.
        },
        your_target: {
            // Target-specific file lists and/or options go here.
        },
    },
});
```

### Options

#### options.readOptions
Type: `Object`
Default value: `{ encoding: 'utf8' }`

#### options.beautifyJSON
Type: `Boolean`
Default value: `true`

### Usage Examples

#### Default Options

```js
grunt.initConfig({
    localizable_strings_to_json: {
        options: {},
        files: {
            'dest/default_options.json': 'src/testing.strings',
        },
    },
});
```

#### Custom Options

```js
grunt.initConfig({
  localizable_strings_to_json: {
    options: {
        beautifyJSON: false
    },
    files: [{
        exapand: true,
        cwd: 'src',
        dest: 'dest',
        src: [
            '**/*.strings'
        ],
        ext: '.json'
    }],
  },
});
```

## Contributing
Please !

## Release History
_(Nothing yet)_
