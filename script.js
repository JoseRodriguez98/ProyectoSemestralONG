

//aquí está la primera funcion pedida que activa el formato oscuro
function modoNocturno() {
    console.log("entro aqui");
    document.body.classList.toggle('modo-noc');
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.toggle('navbar-modo-noc');
    }
    const modals = document.querySelectorAll('.modal-content');
    modals.forEach(modal => {
        modal.classList.toggle('modo-noc');
    })
}

