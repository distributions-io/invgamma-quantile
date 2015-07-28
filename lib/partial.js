'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( alpha, beta )
*	Partially applies shape parameter `alpha` and scale parameter `beta` and returns a function for evaluating the quantile function for a Inverse Gamma distribution.
*
* @param {Number} alpha - shape parameter
* @param {Number} beta - scale parameter
* @returns {Function} quantile function
*/
function partial( alpha, beta ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Inverse Gamma distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
