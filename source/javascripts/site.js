// This is where it all goes :)
window.onload = function() {
    menuToggle = document.getElementById( 'check' );

    menuToggle.addEventListener ('click', function() {
        document.getElementById( 'bigNav' ).classList.toggle( 'displayed' );
    });
};