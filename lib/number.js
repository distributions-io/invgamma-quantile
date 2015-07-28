'use strict';

// MODULES //

var gammaincinv = require( 'compute-gammaincinv' );


// QUANTILE //

/**
* FUNCTION: quantile( p, alpha, beta )
*	Evaluates the quantile function for a Inverse Gamma distribution with shape parameter `alpha` and scale parameter `beta` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @returns {Number} evaluated quantile function
*/
function quantile( p, alpha, beta ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	return beta / gammaincinv( p, alpha, {
		'tail': 'upper'
	});
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
