/*
 * grunt-localizable-strings-to-json
 * https://github.com/aliaksandr-pasynkau/grunt-localizable-strings-to-json
 *
 * Copyright (c) 2014 Aliaksandr Pasynkau
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	grunt.registerMultiTask('localizable_strings_to_json', 'Grunt plugin for convert Ios Localizeble.strings format to JSON format', function() {

		var options = this.options({
			readOptions: { encoding: 'utf8' },
			beautifyJSON: true
		});

		this.files.forEach(function(f) {
			f.src.filter(function(filepath) {
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.'); // Warn on and remove invalid source files (if nonull was set).

					return false;
				}

				return true;
			}).map(function(filepath) {
				var json = {},
					strings = grunt.file.read(filepath, options.readOptions); // Read file source.

				// /^\\s*("(?:[^"]|\\\\")*"|[^"]\\w*)\\s*=\\s*("(?:[^"]|\\\\")*"|[^"]\\w*)\\s*;/
				strings.replace(/^\s*("(?:[^"]|\\")*"|[^"]\w*)\s*=\s*("(?:[^"]|\\")*"|[^"]\w*)\s*;\s*$/gm, function (w, name, value) { // convertion
					name = String(name || '').trim().replace(/^\s*"|\s*"$/g, '').trim();
					value = String(value || '').trim().replace(/^\s*"|\s*"$/g, '').trim();
					json[name] = value;
				});

				return json;
			}).map(function (json) {
				grunt.file.write(f.dest, JSON.stringify(json, null, options.beautifyJSON ? 4 : 0)); // Write the destination file.

				return f.dest;
			}).forEach(function (f) {
				grunt.log.ok('File "' + f + '" created.');
			});

		});
	});

};
