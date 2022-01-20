function modo_oscuro(){
    /*document.body.style.background = "#2a2e33";
    document.getElementById("logo-img").setAttribute("src", "../Imagenes/Logo_Personal_Ajustado_blanco.png");
    var enlaces_header = document.getElementsByClassName("enlaces-header");
    //Cambio el color de cada uno de los elementos de la lista que me ha retornado la instruccion anterior
    for (let i = 0; i < enlaces_header.length; i++) {
        enlaces_header[i].style.textDecorationColor = "white";
    }*/

        document.body.classList.toggle('dark'); //Le damos al body la clase dark
        //document.getElementById("contenedor-modo").style.display="none";
        document.getElementById("boton_cambio").classList.toggle('fa-sun');
        var enlaces_header = document.getElementsByClassName("enlaces-header");
        for (let i = 0; i < enlaces_header.length; i++) {
            enlaces_header[i].classList.toggle('dark');
        }
        changeImg();
        //Añadir el cambio de clase de el nombre y el parrafo
        document.getElementById("name").classList.toggle("dark");
        document.getElementById("surname").classList.toggle("dark");
        document.getElementById("info-parrafo").classList.toggle("dark");
        document.getElementById("info-parrafo2").classList.toggle("dark");
        document.getElementById("flecha-cambio").classList.toggle("dark");
        document.getElementById("flecha-cambio2").classList.toggle("dark");
}

function changeImg(){
    var img = document.getElementById("logo-img").src; //Cogemos el nombre del src de la imagen del logo
    if(img.indexOf("Logo_Personal_Ajustado.png") != -1){ //Si no encuentra el blanco...
        document.getElementById("logo-img").src = "../Imagenes/Logo_Personal_Ajustado_blanco.png";
    }
    else{
        document.getElementById("logo-img").src = "../Imagenes/Logo_Personal_Ajustado.png";
    }
    
}



function redirigir_index(){
    location.href="index.html"
}

function redirigir_sobremi(){
    if(window.location.href === "https://miguelmontejano.github.io/portfolio/"){
        location.href="Html/SobreMi.html";
    }
    else{
        location.href="SobreMi.html";
    }
    
}

function redirigir_trabajos(){
    location.href="Trabajos.html"
}

function redirigir_tfg(){
    location.href="TFG.html"
}

function redirigir_hnb(){
    location.href="HNB.html"
}

function redirigir_linkedin(){
    window.open("https://www.linkedin.com/in/miguel-montejano-marina/");
}

function redirigir_instagram(){
    window.open("https://www.instagram.com/mimii1323/?hl=es");
}

function redirigir_twitter(){
    window.open("https://twitter.com/Mimii1323");
}

function enviar_mail(){
    window.open('mailto:miguelmontejanoprofesional@gmail.com');
}
