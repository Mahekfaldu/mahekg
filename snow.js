/////////////////////////
//    Make it snow!    //
/////////////////////////

// Create random numbers!
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Loop to make a bunch of flakes!
for (var i = 0; i <= 200; i++) {
	// Name the flakes
	const thisFlake = '.flake-' + i;

	// Create snowflake
	$('.snow').prepend('<i class="fa fa-snowflake-o flake flake-' + i + '" aria-hidden="true"></i>');

	// Set random animation time
	$(thisFlake).css('--animation-time', getRandomArbitrary(3, 80) +'s');

	// Set random font size
	$(thisFlake).css('font-size', getRandomArbitrary(5, 18));

	// Add some random blur
	$(thisFlake).css('filter', 'blur(' + getRandomArbitrary(0, 3) +'px)');

	// Make snow fall only downward
	let flakeEntry = getRandomArbitrary(-30, 120);
	let flakeOutry = flakeEntry + getRandomArbitrary(0, 120);

	// Define animation steps
	let fallStart = {
		'transform': 'translate3d(' + getRandomArbitrary(-20, 120) + 'vw, ' + flakeEntry + 'vh, 0) rotateZ(0) scale(1)',
		'opacity': '0'
	};
	let fallMid = {
		'opacity': '1'
	}
	let fallStop = {
		'transform': 'translate3d(' + getRandomArbitrary(-20, 120) + 'vw, ' + flakeOutry + 'vw, 0) rotateZ(359deg) scale(1.75)',
		'opacity': '0'
	};


	// Define keyframes
	$.keyframe.define([{
		name: 'fall-' + i,
		'0%':   fallStart,
		'50%':  fallMid,
		'100%': fallStop
	}]);

	// Set animation 
	$(thisFlake).css('animation', 'spin-and-fade var(--animation-time) ease-in-out infinite, fall-' + i + ' var(--animation-time) ease-in-out infinite');

}
