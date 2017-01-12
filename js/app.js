$(document).ready(function(){

   // Save user input to localStorage
  $( '#notes' ).bind( 'input propertychange' , function(){
    localStorage.setItem( 'note', $(this).val());
  });

  // Display localStorage data, if it exists
  if( localStorage.getItem( 'note' ) && localStorage.getItem( 'note' )!='' ){
    var noteItem = localStorage.getItem( 'note' );
    $( '#notes' ).val( noteItem );
  }
});

// Registering ServiceWorker
if ( 'serviceWorker' in navigator ) {
  navigator.serviceWorker.register( 'sw.js' ).then(function(registration) {

    // Registration was successful
    console.log( 'ServiceWorker registration successful with scope: ', registration.scope );
  }).catch(function(err) {

    // Registration failed with error
    console.log( 'ServiceWorker registration failed: ', err );
  });
}