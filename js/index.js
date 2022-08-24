document.addEventListener("DOMContentLoaded", function () {
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
let agregar_usuario = localStorage.getItem('usuario')
 showData()
function showData (){
    if (agregar_usuario) {
      dato.innerHTML =+ 'a' + agregar_usuario + '</a>';
    }
}