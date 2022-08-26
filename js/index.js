document.addEventListener("DOMContentLoaded", function () {
    pongo_correo();
    document.getElementById("autos").addEventListener("click", function () {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function () {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function () {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

function pongo_correo() {
    const dato = document.getElementById("correo")
    let agregar_usuario = localStorage.getItem('usuario')
    if (agregar_usuario) {
        dato.innerHTML = agregar_usuario;
    }
}