const dato = document.getElementById("email")
function pongo_correo() {
      dato.value=localStorage.getItem("usuario");
      nombre.value=localStorage.getItem("nombre")
      segundo_nombre.value=localStorage.getItem("segundo_nombre")
      apellido.value=localStorage.getItem("apellido")
      segundo_apellido.value=localStorage.getItem("segundo_apellido")
      telefono.value=localStorage.getItem("telefono")
    }
document.addEventListener('DOMContentLoaded', () => {
  pongo_correo();
})

const nombre = document.getElementById("nombre")
const segundo_nombre = document.getElementById("segundo_nombre")
const apellido = document.getElementById("apellido")
const segundo_apellido = document.getElementById("segundo_apellido")
const telefono = document.getElementById("telefono")


function llenar_nombre (){
  localStorage.setItem("nombre",nombre.value)
  localStorage.setItem("segundo_nombre",segundo_nombre.value)
}
  

function llenar_apellido (){
  localStorage.setItem("apellido",apellido.value)
  localStorage.setItem("segundo_apellido",segundo_apellido.value)
}
function llenar_email (){
  localStorage.setItem("email",dato.value)
  localStorage.setItem("telefono",telefono.value)
} 

const boton = document.getElementById("boton_guardar")

boton.addEventListener("click", () => {
  llenar_nombre();
  llenar_apellido();
  llenar_email();
})






