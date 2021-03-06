/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check

'use strict';

const withDefaults = require('../../shared.webpack.config');
const path = require('path');

const serverConfig = withDefaults({
	target: 'webworker',
	context: __dirname,
	entry: {
		extension: './src/browser/cssServerMain.ts',
	},
	output: {
		filename: 'cssServerMain.js',
		path: path.join(__dirname, 'dist', 'browser'),
		libraryTarget: 'var'
	},
	performance: {
		hints: false
	},
	resolve: {
		alias: {
			'vscode-nls': path.resolve(__dirname, '../../../build/polyfills/vscode-nls.js')
		}
	}
});
serverConfig.module.rules[0].use.shift(); // remove nls loader

module.exports = serverConfig;
