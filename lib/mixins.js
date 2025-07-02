const mixins = {
	maskicon(mixin, params) {
		const [icon, location] = params.split(' ');
		if (location === 'theme') {
			/* default */
			mixin.replaceWith(`mask-image: url('/wp-content/themes/amp-theme/dist/svg/icons/${icon}.svg')`);
		}
		if (location === 'blocktheme') {
			mixin.replaceWith(`mask-image: url('/wp-content/themes/amp-block-theme/dist/svg/icons/${icon}.svg')`);
		}
		if (location === 'blocklibrary') {
			mixin.replaceWith(`mask-image: url('/wp-content/mu-plugins/amp-block-library/dist/svg/icons/${icon}.svg')`);
		}
	},
};

module.exports = mixins;
