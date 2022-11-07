const dato = document.getElementById("email")
function pongo_correo() {
      dato.value=localStorage.getItem("usuario");
    }
document.addEventListener('DOMContentLoaded', () => {
  pongo_correo();
  console.log("entro")
})

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")

function llenar_nombre (){
  if(nombre != 0 ){
  nombre.classList.add("is-valid");
  nombre.classList.remove("is-invalid");
  localStorage.setItem("nombre",nombre.value)
  return false;
} else {
  nombre.classList.add("is-invalid");
  nombre.classList.remove("is-valid");
  return true;
}}
function llenar_apellido (){
  if(apellido != 0 ){
  apellido.classList.add("is-valid");
  apellido.classList.remove("is-invalid");
  localStorage.setItem("apellido",apellido.value)
  return false;
} else {
  apellido.classList.add("is-invalid");
  apellido.classList.remove("is-valid");
  return true;
}} 
function llenar_email (){
  if(nombre != 0 ){
  dato.classList.add("is-valid");
  dato.classList.remove("is-invalid");
  localStorage.setItem("email",dato.value)
  return false;
} else {
  dato.classList.add("is-invalid");
  dato.classList.remove("is-valid");
  return true;
}}

const boton = document.getElementById("boton_guardar")

boton.addEventListener("click", () => {
  llenar_nombre();
  llenar_apellido();
  llenar_email();
  console.log(llenar_nombre());
})






