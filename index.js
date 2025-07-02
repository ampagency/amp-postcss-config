// eslint-disable-next-line import/extensions
const baseConfig = require('10up-toolkit/config/postcss.config.js');
const additionalPlugins = require('./lib/plugins');
const mixins = require('./lib/mixins');
const functions = require('./lib/functions');

module.exports = ({
	customAdditionalPlugins = {},
	customPreloadPlugins = {},
	customMixins = {},
	customVariables = {},
	customFunctions = {},
} = {}) => {
	const config = baseConfig();

	if (config.plugins['postcss-preset-env']) {
		config.plugins['postcss-preset-env'].stage = 0;
		config.plugins['postcss-preset-env'].features = {
			'custom-properties': true,
		};
	}

	if (config.plugins['postcss-mixins']) {
		config.plugins['postcss-mixins'].mixins = {
			...mixins,
			...customMixins,
		};
	}

	config.plugins = {
		...{
			'postcss-simple-vars': {
				variables() {
					// eslint-disable-next-line global-require
					return {
						...require('./variables'),
						...customVariables,
					};
				},
				silent: true,
			},
		},
		...customPreloadPlugins,
		...config.plugins,
		...additionalPlugins,
		...{
			'postcss-functions': {
				functions,
				...customFunctions,
			},
		},
		...customAdditionalPlugins,
	};

	return config;
};
