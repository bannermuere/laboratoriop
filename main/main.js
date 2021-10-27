
document.getElementById("iconoMenu").addEventListener("click", mostrarMenu);

var divs = document.getElementsByClassName("cerrarmenu");

    for (var i=0; i< divs.length; i++) {

        divs[i].addEventListener("click",function() {
            document.getElementById("menuFlotante").classList.remove('mostrar');

        });
    }

function mostrarMenu(){
    document.getElementById("menuFlotante").classList.add('mostrar');
}


window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll > 120){
        document.getElementById("iconoMenu").classList.remove('iconoMenu');
    }
    else{
        document.getElementById("iconoMenu").classList.add('iconoMenu');
    }
}