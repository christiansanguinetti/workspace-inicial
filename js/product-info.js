let datos_producto = localStorage.getItem("producto_id")
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/" + datos_producto + ".json"
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/"


console.log(datos_producto)
//cargo informacion de productos
document.addEventListener('DOMContentLoaded', async function () {
    let informacion = document.getElementById("informacion_producto")
    const data = await getJSONData(PRODUCT_INFO_URL)
    console.log(data)
    informacion.innerHTML = "";
    for (let imagen of data.data.images) {
        informacion.innerHTML += `
      <div>
       <br>
       <div> 
         <h2>${data.data.name}</h2>
       </div>
       <br>
      <div>
        <h4> Precio</h4>
        <p> ${data.data.cost}</p>
      </div>
      <br>
      <div>
        <h4> Descripcion</h4>
        <p> ${data.data.description}</p>
      </div>
      <br>
      <div>
        <h4>Categoria</h4>
        <p>${data.data.category}</p>
      </div>
      <br>
      <div>
        <h4>Cantidad de Vendidos</h4>
        <p>${data.data.soldCount}</p>
      </div>
      <br>
      <div>
        <h4>Imagenes ilustrativas</h4>
        <div class="col-3">
        <img src="${imagen}" alt="${imagen}" class="img-thumbnail">
    </div>
      </div>
      `
    }

})