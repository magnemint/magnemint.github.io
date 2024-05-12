$(window).on( 'load', function() {
    $( 'svg' ).fadeOut();
    $( '#loader' ).delay( 350 ).fadeOut( 'slow' ); 
    $( 'body' ).delay( 350 ).css( { 'overflow': 'visible' } );
})