function validar() {
    var email = document.getElementById("floatingInput").value;
    var password = document.getElementById("floatingPassword").value;

    if (email && password !== 0) {
        alert('email y password validos')
        return validacionCorrecta
    } else {
        alert('ingrese los datos correctamente')
        validacionincorrecta = false
    }
}

const formulario = document.getElementsByClassName("form-control")
let boton = document.getElementById("button");
boton.addEventListener("click", () => {
    let cantidadcompletas = 0;
    for (formulario of formularios) {
        if (formulario.value.length != 0) {
            cantidadcompletas += 1;
        }
    }
    if (cantidadcompletas == 2 && validacionCorrecta == true) {
        location.href = "principal.html";
    }
});


