// Define the uri for the api
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

// Function that gets a quote
var getQuote = function( data ) {
  $( ".quote-content" ).text( data.quoteText );
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor +' @antoninarcher';
  if ( data.quoteAuthor === '' ) {
    data.quoteAuthor = 'Unknown';
  }
  $( ".quote-author" ).text( data.quoteAuthor );
  $( ".twitter-share-button" ).attr( "href", quot );
};

// Get a quote at pageload
$( document ).ready( function() {
  $.getJSON( url, getQuote, 'jsonp' );
} );

// Change the quote when clicking on the button
$( ".action" ).click( function() {
  $.getJSON(url, getQuote, 'jsonp' );
  // Define the colors
  var colors = ["#34495e","#2ecc71","#3498db", "#8e44ad", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
  // Get a random number
  var rand = Math.floor( Math.random()*colors.length );
  $( "body" ).css( "background-color", colors[rand] ).hide().fadeIn( 'slow' );
  $( ".card" ).css( "color", colors[rand] );
  $( ".btn" ).css( "background-color", colors[rand] );
});
