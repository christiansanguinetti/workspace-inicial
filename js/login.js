let emailcorrecto = false
function validar(valor) {
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (!re.exec (valor)) {
        alert('el email no es valido');
        return emailcorrecto
    } else {
        emailcorrecto = true
    }
}


const formulario = document.getElementsByClassName("form-control")
let boton = document.getElementById("button");
boton.addEventListener("click", () => {
let cantidadescompletas = 0;
for (formulario of formularios) {

    if (formulario.value.length != 0) {
        cantidadescompletas += 1;
    }
}
if (cantidadescompletas == 2 && emailcorrecto == true) {
    location.href = "principal.html";
}
})

