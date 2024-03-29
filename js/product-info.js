let datos_producto = localStorage.getItem("producto_id")
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/" + datos_producto + ".json"
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/" + datos_producto + ".json"
const relacionados = document.getElementById("relacionados")
const boton = document.getElementById("submit")
console.log(datos_producto)
//cargo informacion de productos
document.addEventListener('DOMContentLoaded', async function () {
  pongo_correo()
  let informacion = document.getElementById("informacion_producto")
  let fotos = document.getElementById("fotos")
  let info_comentarios = document.getElementById(comentarios)
  const data = await getJSONData(PRODUCT_INFO_URL)
  const comentario = await getJSONData(PRODUCT_INFO_COMMENTS_URL)
  console.log(comentario)
  console.log(fotos)
  console.log(data);
  {
    informacion.innerHTML = "";
    informacion.innerHTML += `
      <div>
      <br>
      <h2>${data.data.name}</h2>
      <hr>
      <div>
        <h4> Precio</h4>
        <p> ${data.data.cost}</p>
      </div>
      <div>
        <h4> Descripcion</h4>
        <p> ${data.data.description}</p>
      </div>
      <div>
        <h4>Categoria</h4>
        <p>${data.data.category}</p>
      </div>
      <div>
        <h4>Cantidad de Vendidos</h4>
        <p>${data.data.soldCount}</p>
      </div>
      <h4> Imagenes ilustrativas </4>
      </div>
      
      `
    for (let imagen of data.data.images) {
      fotos.innerHTML += ` 
         <div class="col-3">
         <img src="${imagen}" class="img-thumbnail"> 
         </div>
         `

    }
    comentarios.innerHTML +=
      ` <hr>
         <h2> Comentarios</h2>`


    for (let comento of comentario.data) {
      comentarios.innerHTML += `
        <div id="container">
        <div> <h5>${comento.user}</h5>   ${comento.dateTime} <div class="stars"> 
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span> </div> 
        </div>
        <p> ${comento.description}</p>  
       </div>
       `
    }
    const star = document.getElementsByClassName("stars")
    for (let i = 0; i < star.length; i++) {
      for (let f = 0; f < star[i].children.length; f++)
        if (f < comentario.data[i].score) {
          star[i].children[f].classList.add("checked")
        }
    }
  }
   comentarios.innerHTML +=  ` 
    <div> <h5>Productos Relacionados </h5> </div>`   
  for ( let relacionado of data.data.relatedProducts){
   relacionados.innerHTML += `
   <div  class="list-group-item list-group-item-action cursor-active" id="relacionados">
    <div class="row" onClick = "producto_relacionado(${relacionado.id})">
     <div class="col-3">
     <div>  <img src="${relacionado.image}" class="img-thumbnail"> 
     ${relacionado.name}</div>
    </div> 
   `
   }
})


const puntuacion = document.getElementById("puntuacion")
const texto = document.getElementById("textbox")

function limpio() {
  boton.addEventListener("click", () => {
    puntuacion.value = ""
    texto.value = ""
    alert("comentario echo con exito")
 })}
 limpio()
 function producto_relacionado(id){
  fetch(PRODUCT_INFO_URL).then(function (response) {
    return response.json();
}).then(function (data) { 
    localStorage.setItem("producto_id",id)
    window.location = "product-info.html"
})
}
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