//arrays branch
var iceCream = [ 'Strawberry', 'Chocolate', 'Cookies and Cream' ];
var newLength = iceCream.push( 'Rocky Road' );

//presidents branch
var presidents = [
		{
			firstName: 'Barack',
			lastName: 'Obama',
			termLength: '2009 - Present',
			party: 'Democratic',
			yearsOfPresidency: 8
		},
		{
			firstName: 'George W',
			lastName: 'Bush',
			termLength: '2001 - 2009',
			party: 'Republican',
			yearsOfPresidency: 8
		},
		{
			firstName: 'Bill',
			lastName: 'Clinton',
			termLength: '1993 - 2001',
			party: 'Democratic',
			yearsOfPresidency: 8
		},
		{
			firstName: 'George H. W',
			lastName: 'Bush',
			termLength: '1989 - 1993',
			party: 'Republican',
			yearsOfPresidency: 4
		},
		{
			firstName: 'Ronald',
			lastName: 'Reagan',
			termLength: '1981 - 1989',
			party: 'Republican',
			yearsOfPresidency: 8
		}
	];
console.log( presidents[ 2 ].firstName + ' ' + presidents[ 2 ].lastName ) ;

//functions branch
function howdy( person, message ) {
	return person + 'says' + message;
}
var message = howdy( 'Jen Vitrano ', ' howdy!' );
console.log( message ) ;

//new numba function
var numba = function( string ) {
	if ( string.length < 7 ) {
		console.log( 'What a short little word!' );
	} else if ( string.length > 7 ) {
		console.log( 'Im sorry, but thats too many to count.' );
	} else if ( string.length == 7 ) {
			console.log( '7, what a perfect choice!' );}
};
numba( '7' );
numba( 'seventy' );
numba( 'university' );

//inception function
function inception( callback, value ) {
	callback( value );
}
var callback = 'Harry Potter';
var value = 'is a fantastic movie.';
console.log( callback, value );
