let datos_producto = localStorage.getItem("id")
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/" 
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/" + datos_producto + ".json"


//cargo informacion de productos
document.addEventListener('DOMContentLoaded', async function () {  
    let informacion = document.getElementById ("informacion_producto")
    const result = await getJSONData(PRODUCT_INFO_URL)

    informacion.innerHTML = "";
    for (let objeto of result.data) {
      informacion.innerHTML += `
      <div (${objeto.id})" class="list-group-item list-group-item-action cursor-active">
      <div class="row"> 
          <div class="col-3">
              <img src="${objeto.images}" alt="${objeto.description}" class="img-thumbnail">
          </div>
          <div class="col">
              <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">${objeto.name} ${objeto.currency} ${objeto.cost}</h4>
                  <small class="text-muted">${objeto.soldCount} artículos</small>
              </div>
              <p class="mb-1">${objeto.description}</p>
          </div>
      </div>
  </div>
      
      
      
      
      
      ` 

    }

})