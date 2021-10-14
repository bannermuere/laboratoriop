
document.getElementById("iconoMenu").addEventListener("click", mostrarMenu);

var divs = document.getElementsByClassName("cerrarmenu");

    for (var i=0; i< divs.length; i++) {

        divs[i].addEventListener("click",function() {
            document.getElementById("menuFlotante").classList.remove('mostrar');

        });
    }

function mostrarMenu(){
    document.getElementById("menuFlotante").classList.toggle('mostrar');
}


window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll > 120){
        document.getElementById("iconoMenu").classList.remove('iconoMenu');
    }else{
        document.getElementById("iconoMenu").classList.add('iconoMenu');
    }
}

let slider = document.querySelector(".slider")
let sliderIndividual = document.querySelectorAll(".contenidoSlider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})
setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },2500)
    }


}