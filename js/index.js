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

const dato = document.getElementById("correo")
const agregar_usuario = localStorage.getItem('usuario')
function pongo_correo() {
    if (agregar_usuario) {
        dato.innerHTML = agregar_usuario;
    }
}

function menu() {
    const poner_correo = document.getElementById("aca_correo")
    //const agregar = localStorage.getItem('usuario')
    if (agregar_usuario) {
        poner_correo.innerHTML = ` 
    <div class="btn-group">
    <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    ${agregar_usuario}
  </a>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
    <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
    <li><a class="dropdown-item" href="index.html">Cerrar Sesión</a></li>
  </ul>
    `
    }


}
menu()