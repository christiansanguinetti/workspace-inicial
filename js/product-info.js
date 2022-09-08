let datos_producto = localStorage.getItem("producto_id")
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/" + datos_producto + ".json"
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/"


console.log(datos_producto)
//cargo informacion de productos
document.addEventListener('DOMContentLoaded', async function () {
    let informacion = document.getElementById("informacion_producto")
    const data = await getJSONData(PRODUCT_INFO_URL)

    informacion.innerHTML = "";
    
    {
    informacion.innerHTML += `
      <div (${data.id})" class="list-group-item list-group-item-action cursor-active">
      <di class="row"> 
          <div class="col-3">
              <img src="${data.images}" alt="${data.description}" class="img-thumbnail">
          </div>
          <div class="col">
              <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">${data.name} ${data.currency} ${data.cost}</h4>
                  <small class="text-muted">${data.soldCount} artículos</small>
              </div>
              <p class="mb-1">${data.description}</p>
           </div>
      </div>
      </div>  
      `
    }

})