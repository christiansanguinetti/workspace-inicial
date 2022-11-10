
function validar() {
    const usuario = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;
    if (usuario && password !== 0) {
        alert("usuario y password validos")
        localStorage.setItem("usuario", usuario)
        return window.location = "principal.html";
    } else {
        alert("usuario y password invalidos")
    }
}
function borrar_localstorage() {
    localStorage.removeItem('segundo_nombre');
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellido');
    localStorage.removeItem('segundo_apellido');
    localStorage.removeItem('telefono');
}
borrar_localstorage()
