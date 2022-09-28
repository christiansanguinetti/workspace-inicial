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