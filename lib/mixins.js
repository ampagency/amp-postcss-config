const mixins = {
	maskicon(mixin, params) {
		const [icon, location] = params.split(' ');
		switch (location) {
			case 'theme':
				mixin.replaceWith(`mask-image: url('/wp-content/themes/amp-theme/dist/svg/icons/${icon}.svg')`);
				break;
			case 'blocktheme':
				mixin.replaceWith(`mask-image: url('/wp-content/themes/amp-block-theme/dist/svg/icons/${icon}.svg')`);
				break;
			case 'blocklibrary':
				mixin.replaceWith(`mask-image: url('/wp-content/mu-plugins/amp-block-library/dist/svg/icons/${icon}.svg')`);
				break;
			default:
				mixin.replaceWith(`mask-image: url('${location}/${icon}.svg')`);
				break;
		}
	},
};

module.exports = mixins;
