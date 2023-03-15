// This is where it all goes :)
posAndresize = function (elt) {
    offsets=document.getElementById(elt).getBoundingClientRect();
    bg=document.getElementById('bg'+elt);
    bg.style.height=(offsets.height*1.6)+"px";
    bg.style.top=(offsets.top*.7+window.scrollY)+"px";
};
resetTools = function () {
    tclist = document.getElementById('toolscontrol');
    for (let i = 0; i < tclist.children.length; i++) {
        if(tclist.children[i].classList.contains('reveal')) tclist.children[i].classList.remove("reveal");
    }
    relist = document.getElementsByClassName("item");
    for (let i = 0; i < relist.length; i++) {
        relist[i].classList.add('reveal');
    }
}
clearTools = function () {
    tclist = document.getElementById('toolscontrol');
    itlist = document.getElementById('toolslist');
    for (let i = 0; i < tclist.children.length; i++) {
        if(tclist.children[i].classList.contains('reveal')) tclist.children[i].classList.remove("reveal");
    }
    for (let i = 0; i < itlist.children.length; i++) {
        if(itlist.children[i].classList.contains('reveal')) itlist.children[i].classList.remove("reveal");
    }
}
revealTools = function (tag) {
    clearTools ();
    relist = document.getElementsByClassName(tag);
    for (let i = 0; i < relist.length; i++) {
        relist[i].classList.add('reveal');
    }
}


window.onload = function() {
    menuToggle = document.getElementById( 'check' );

    menuToggle.addEventListener ('click', function() {
        document.getElementById( 'bigNav' ).classList.toggle( 'displayed' );
    });

    //posAndresize('contexte');

    //bgcontexte=document.getElementById('contexte');
    tclist = document.getElementById('toolscontrol');
    for (let i = 0; i < tclist.children.length; i++) {
        tclist.children[i].addEventListener ('click', function() {
            if(!tclist.children[i].classList.contains('reveal')) {
                revealTools(tclist.children[i].classList);
            }
            else {
                resetTools();
            }
        });
    }
};

/*
window.onresize = function() {
    posAndresize('contexte');
}
*/