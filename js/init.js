const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const correo = document.getElementById("correo")
//const datos_producto = localStorage.getItem("producto_id")
//const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/"
//const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/" + datos_producto + ".json"

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
function pongo_correo() {
  const dato = document.getElementById("correo")
  let agregar_usuario = localStorage.getItem('usuario')
  if (agregar_usuario) {
      dato.innerHTML = agregar_usuario;
  }
}
 
function menu(){
  if(correo){
  correo.innerHTML = ` 
  <div class="btn-group">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  ${correo}
</a>
  <ul class="dropdown-menu">
  <li><span class="dropdown-item-text">Dropdown item text</span></li>
  <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
  <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
  <li><a class="dropdown-item" href="index.html">Cerrar Sesión</a></li>
</ul>
  `
  }
    
  
}
menu()