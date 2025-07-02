const additionalPlugins = {
	'postcss-gap-properties': {},
	'postcss-nested': {},
	'postcss-each': {},
	'postcss-at-rules-variables': {},
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

module.exports = additionalPlugins;
