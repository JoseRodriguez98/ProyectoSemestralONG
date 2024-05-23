
//PRIMERA FUNCION SOLICITADA
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

//SEGUNDA FUNCION SOLICITADA
//con esta funcion al pasar por encima de las imagenes y los botones se van a agrandar un poco
$(document).ready(function() {
    $('.zoom').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
        }, 
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );
});

