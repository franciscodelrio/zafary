const Home = document.querySelector("#P_Home");
const Zpotify = document.querySelector("#P_Zpotify");
const Whatzapp = document.querySelector("#P_Whatzapp");

Home.addEventListener("click", abrirHome);
Zpotify.addEventListener("click", abrirZpotify);
Whatzapp.addEventListener("click", abrirWhatzapp);

const contenidoPag = document.querySelector("#infoPagina");
const tituloPagina = document.querySelector('#titulo-pagina');

function abrirHome() {
    
    contenidoPag.setAttribute('src', '../Home/Index.html');
    tituloPagina.innerHTML = 'Home'
}

function abrirZpotify() {
    
    contenidoPag.setAttribute('src', '../Zpotify/Index.html');
    tituloPagina.innerHTML = 'Zpotify'
}

function abrirWhatzapp() {
    
    contenidoPag.setAttribute("src", "../WhatzApp/index.html");
    tituloPagina.innerHTML = 'WhatzApp'
}