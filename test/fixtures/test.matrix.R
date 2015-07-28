options( digits = 16 )
library( jsonlite )
library( pscl )

alpha = 2
beta = 3.9
probs = 1:25 / 26
y = qigamma( probs, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
