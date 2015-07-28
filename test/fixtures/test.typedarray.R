options( digits = 16 )
library( jsonlite )
library( pscl )


alpha = 7
beta = 2
probs = seq( 0.01, 0.99, 0.01 )
y = qigamma( probs, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/typedarray.json" )
