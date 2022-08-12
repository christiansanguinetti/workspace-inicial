let emailcorrecto = false
function validar(valor) {
  re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
 if (!re.exec*(valor)){
 alert('el email no es valido');
 return emailcorrecto
 }else{
    emailcorrecto=true
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


