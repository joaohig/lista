document.addEventListener("DOMContentLoaded", function() {
    const botaoOcultar = document.getElementById("botaoOcultar");
    const botaoMostrar = document.getElementById("botaoMostrar");
    const elementoParaOcultarMostrar = document.getElementById("elementoParaOcultarMostrar");

    // Esconder o elemento
    botaoOcultar.addEventListener("click", function() {
        elementoParaOcultarMostrar.style.display = 'none';
    });

    // Mostrar o elemento
    botaoMostrar.addEventListener("click", function() {
        elementoParaOcultarMostrar.style.display = 'block';
    });
});
