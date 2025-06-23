// eslint-disable-next-line import/extensions
const baseConfig = require('10up-toolkit/config/postcss.config.js');
const { additionalPlugins, preLoadPlugins, mixins } = require('./postcss/config');

module.exports = (props) => {
	const config = baseConfig(props);

	if (config.plugins['postcss-preset-env']) {
		config.plugins['postcss-preset-env'].stage = 0;
		config.plugins['postcss-preset-env'].features = {
			'custom-properties': true,
		};
	}

	if (config.plugins['postcss-mixins']) {
		config.plugins['postcss-mixins'].mixins = mixins;
	}

	config.plugins = {
		...preLoadPlugins,
		...config.plugins,
		...additionalPlugins,
	};

	return config;
};
