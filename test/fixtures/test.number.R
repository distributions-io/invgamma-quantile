options( digits = 16 )
library( jsonlite )
library( pscl )


alpha = 0.3
beta = 0.3
probs = c( 0.25, 0.5, 0.75 )
y = qigamma( probs, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
