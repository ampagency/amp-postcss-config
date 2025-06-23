// Converts pixels to rems, assuming a base font size of 16px.
function pxtorem(pxValue) {
	const base = 16;
	return `${pxValue / base}rem`;
}

// Converts pixels to viewport width based on a screen size.
function pxtovw(value, screenSize) {
	return `${(value.replace(/[a-zA-Z]/g, '') / screenSize.replace(/[a-zA-Z]/g, '')) * 100}vw`;
}

function responsiveFontSize(minValue, maxValue, startWidth, endWidth) {
	// Function to strip "px" and convert to a number
	const parsePx = (value) => parseFloat(value.replace('px', ''));

	// Parse the inputs
	const min = parsePx(minValue);
	const max = parsePx(maxValue);
	const start = parsePx(startWidth);
	const end = parsePx(endWidth);

	// Calculate the slope
	const slope = (max - min) / (end - start);

	// Return the full clamp definition
	return `clamp(${minValue}, calc(${min}px + ${slope} * (100vw - ${start}px)), ${maxValue})`;
}

// used on grid offsets; can be abstracted to be a more helpful math function
// postcss doesn't have "math" like scss ...
function calcOffset(offset) {
	return parseInt(offset, 10) + 1;
}

module.exports = {
	'--px-to-rem': pxtorem,
	'--px-to-vw': pxtovw,
	'--calc-offset': calcOffset,
	'--responsive-font-size': responsiveFontSize,
};
