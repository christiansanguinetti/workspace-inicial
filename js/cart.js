const dato = document.getElementById("correo")
const agregar_usuario = localStorage.getItem('usuario')
const info_carrito = "https://japceibal.github.io/emercado-api/user_cart/25801.json"


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
const tabla = document.getElementById("tabla")
const costos = document.getElementById("costos")
document.addEventListener('DOMContentLoaded', async function () {
  let dato = await getJSONData(info_carrito)
  tabla.innerHTML = ""
  tabla.innerHTML += `
  <thead>
  <tr>
    <th scope="col"></th>
    <th scope="col">Nombre</th>
    <th scope="col">Costo</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Subtotal</th>
  </tr>
</thead>`
  for (let arr of dato.data.articles) {
    tabla.innerHTML += `
 <tbody>
  <tr>
    <th scope="row"><img style="width: 100px;" src="${arr.image}" class="img-thumbnail"> </th>
    <td>${arr.name}</td>
    <td>${arr.currency} ${arr.unitCost}</td>
    <td>
    <input oninput="calcular_costo(${arr.unitCost}, this.value)" type="number" value="${arr.count}" min="1" max="5" id="input"></td>
    <td>${arr.currency}<span id="subtotal">${arr.unitCost} </span> </td>
  </tr>
  `

    costos.innerHTML += `
   <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Subtotal del producto (U$D)
    <span class="badge bg-primary rounded-pill" id="costoss">${arr.unitCost}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Costo del envio 
    <span class="badge bg-primary rounded-pill id="envios" onmousemove="calcular_envio(${arr.unitCost})" in>${arr.currency}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Total
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>
   `
  }


})

function calcular_costo(parametro1, parametro2) {
  let costoss = document.getElementById("costoss")
  let subtotal = document.getElementById("subtotal");
  subtotal.innerHTML = parametro1 * parametro2
  costoss.innerHTML = parametro1 * parametro2
}
selector1 = document.getElementById("opcion1")
selector2 = document.getElementById("opcion2")
selector3 = document.getElementById("opcion3")
function calcular_envio(para) {
  let envio = document.getElementById("envios")
  if (selector1)
    envio.innerHTML = para / 0.15
  else if (selector2)
    envio.innerHTML = para / 0.07
  else if (selector3)
    envio.innerHTML = para / 0.05
}

const tarjeta = document.getElementById( "flexRadioDefault1")
const transferencia = document.getElementById( "flexRadioDefault2")
const numero_cuenta = document.getElementById( "numero_cuenta")
const numero_tarjeta = document.getElementById( "numero_tarjeta")
const codigo_seguridad = document.getElementById( "codigo_seguridad")
const vencimiento_tarjeta = document.getElementById( "vencimiento_tarjeta")


function chequear() {
  if (tarjeta.checked) {
    transferencia.disabled=true
    numero_cuenta.disabled = true
  } else if (transferencia.checked){
    tarjeta.disabled=true
   numero_tarjeta.disabled= true
   codigo_seguridad.disabled = true
   vencimiento_tarjeta.disabled = true
  
} }