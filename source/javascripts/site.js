// This is where it all goes :)
posAndresize = function (elt) {
    offsets=document.getElementById(elt).getBoundingClientRect();
    bg=document.getElementById('bg'+elt);
    bg.style.height=(offsets.height*1.6)+"px";
    bg.style.top=(offsets.top*.7+window.scrollY)+"px";
}

window.onload = function() {
    menuToggle = document.getElementById( 'check' );

    menuToggle.addEventListener ('click', function() {
        document.getElementById( 'bigNav' ).classList.toggle( 'displayed' );
    });

    //posAndresize('contexte');

    //bgcontexte=document.getElementById('contexte');
};
/*
window.onresize = function() {
    posAndresize('contexte');
}
*/