const functions = require('./functions');

const additionalPlugins = {
	'postcss-gap-properties': {},
	'postcss-nested': {},
	'postcss-each': {},
	'postcss-at-rules-variables': {},
	'postcss-functions': {
		functions,
	},
	'postcss-pxtorem': {
		// https://github.com/cuth/postcss-pxtorem
		rootValue: 16,
		unitPrecision: 5,
		propList: [
			'$bp-size-*',
			'--button-*',
			'--font-size-*',
			'--modal-*',
			'--upcoming-events-*',
			'font',
			'font-size',
			'gap',
			'line-height',
			'letter-spacing',
			'word-spacing',
		],
		selectorBlackList: [],
		replace: true,
		mediaQuery: false,
		minPixelValue: 0,
		exclude: /node_modules/i,
	},
};

// IMPORTANT: Use this to "preload" plugins ahead of base config.
const preLoadPlugins = {
	'postcss-simple-vars': {
		variables() {
			// eslint-disable-next-line global-require
			return require('./variables');
		},
		silent: true,
	},
};

const mixins = {
	maskicon(mixin, params) {
		const [icon, location] = params.split(' ');
		if (location === 'theme') {
			/* default */
			mixin.replaceWith(
				`mask-image: url('/wp-content/themes/amp-theme/dist/svg/icons/${icon}.svg')`,
			);
		}
		if (location === 'blocktheme') {
			mixin.replaceWith(
				`mask-image: url('/wp-content/themes/amp-block-theme/dist/svg/icons/${icon}.svg')`,
			);
		}
		if (location === 'blocklibrary') {
			mixin.replaceWith(
				`mask-image: url('/wp-content/mu-plugins/amp-block-library/dist/svg/icons/${icon}.svg')`,
			);
		}
	},
};

module.exports = {
	additionalPlugins,
	preLoadPlugins,
	mixins,
};
