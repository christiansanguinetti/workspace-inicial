let datos_producto = localStorage.getItem("producto_id")
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/" + datos_producto + ".json"
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/" + datos_producto + ".json"
let fotos = document.getElementById("fotos")

console.log(datos_producto)
//cargo informacion de productos
document.addEventListener('DOMContentLoaded', async function () {
    let informacion = document.getElementById("informacion_producto")
    let fotos = document.getElementById("fotos")
    let info_comentarios = document.getElementById(comentarios)
    const data = await getJSONData(PRODUCT_INFO_URL)
    const comentario = await getJSONData(PRODUCT_INFO_COMMENTS_URL)
    console.log(comentario)
    console.log(fotos)
    {
        informacion.innerHTML = "";
        informacion.innerHTML += `
      <div>
      <br>
      <h2>${data.data.name}</h2>
      <br>
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
            ` <br>
         <h2> Comentarios</h2>`
        for (let comento of comentario.data) {
            console.log(comento)
            comentarios.innerHTML += `
        <div id="container">
        <div> <h5>${comento.user}</h5>   ${comento.dateTime} - ${comento.score} </div>
        <p> ${comento.description}</p>  
       </div>`
        }
    }
    
})
 
