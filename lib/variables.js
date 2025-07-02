const bpValues = {
	mobile: 600,
	tablet: 960,
	desktopTypography: 1280,
	desktopSm: 1440,
	desktop: 1920,
	desktopLg: 2600,
};

/*
Variable                 | Calculation            | Value
------------------------|------------------------|-------
Mobile Max              | Mobile                | 600
Tablet                  | Mobile + 1            | 601
Tablet Max              | Tablet                 | 960
Desktop SM              | Tablet + 1            | 961
Desktop Typography      | desktopTypography + 1 | 1281
Desktop Typography Max  | desktop               | 1920
Desktop SM Max          | DesktopSm             | 1440
Desktop                 | DesktopSm + 1         | 1441
Desktop Max             | desktop               | 1920
Desktop Lg              | desktop + 1           | 1921
Desktop Lg Max          | desktopLg             | 2600
Desktop XL              | desktopLg + 1         | 2601
*/

const breakpoints = {
	'bp-size-mobile-max': `${bpValues.mobile}px`,
	'bp-size-tablet': `${bpValues.mobile + 1}px`,
	'bp-size-tablet-max': `${bpValues.tablet}px`,
	'bp-size-desktop-sm': `${bpValues.tablet + 1}px`,
	'bp-size-desktop-sm-max': `${bpValues.desktopSm}px`,
	'bp-size-desktop-typography': `${bpValues.desktopTypography + 1}px`,
	'bp-size-desktop-typography-max': `${bpValues.desktop}px`,
	'bp-size-desktop': `${bpValues.desktopSm + 1}px`,
	'bp-size-desktop-max': `${bpValues.desktop}px`,
	'bp-size-desktop-lg': `${bpValues.desktop + 1}px`,
	'bp-size-desktop-lg-max': `${bpValues.desktopLg}px`,
	'bp-size-desktop-xl': `${bpValues.desktopLg + 1}px`,
};

const animation = {
	ease: '0.25, 0.1, 0.25, 1',
	duration: 0.3,
};

const variables = {
	...breakpoints,
	...animation,
};

module.exports = variables;
