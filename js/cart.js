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
    Costo del envio (U$D)
    <span class="badge bg-primary rounded-pill" id="envios"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Total
    <span class="badge bg-primary rounded-pill" id="total"></span>
  </li>
</ul>
   `
  }
  const envio = document.getElementById("envios")

  function calcular_envio() {
    let subtotal = Number(document.getElementById("subtotal").textContent)
    let indice = opciones.selectedIndex
    if (indice == 1)
      envio.innerHTML = subtotal * 0.15
    else if (indice == 2)
      envio.innerHTML = subtotal * 0.07
    else if (indice == 3)
      envio.innerHTML = subtotal * 0.05
  }


  opciones.addEventListener("click", () => {
    calcular_envio();
    sumar_total()
  })

  function sumar_total() {
    let subtotal = Number(document.getElementById("subtotal").textContent)
    const total = document.getElementById("total")
    total.innerHTML = subtotal + Number(envio.textContent)
  }

})

function calcular_costo(parametro1, parametro2) {
  let costoss = document.getElementById("costoss")
  let subtotal = document.getElementById("subtotal");
  subtotal.innerHTML = parametro1 * parametro2
  costoss.innerHTML = parametro1 * parametro2
}

const opciones = document.getElementById("selector")



const tarjeta = document.getElementById("flexRadioDefault1")
const transferencia = document.getElementById("flexRadioDefault2")
const numero_cuenta = document.getElementById("numero_cuenta")
const numero_tarjeta = document.getElementById("numero_tarjeta")
const codigo_seguridad = document.getElementById("codigo_seguridad")
const vencimiento_tarjeta = document.getElementById("vencimiento_tarjeta")
const boton_guardar = document.getElementById("boton_guardar")
const calle = document.getElementById("calle")
const numero = document.getElementById("numero")
const esquina = document.getElementById("esquina")
const boton_comprar = document.getElementById("boton_comprar")
//funcion que chequea metodo de pago 
function chequear() {
  if (tarjeta.checked) {
    transferencia.disabled = true
    numero_cuenta.disabled = true
  } else if (transferencia.checked) {
    tarjeta.disabled = true
    numero_tarjeta.disabled = true
    codigo_seguridad.disabled = true
    vencimiento_tarjeta.disabled = true
  }
}


//funcion para que funcione el metodo de pago y si no chequeas no haga nada
function validad (){
  indice = opciones.selectedIndex;
  if( indice == null || indice == 0 ) {
    return false;
  }

boton_comprar.addEventListener ("click", () => {
validad()
alert ("compra realizada")
})} 


//funcion de boostrap para que funcione las clases
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
         {
          event.preventDefault()
          event.stopPropagation()
          }
        } 


        form.classList.add('was-validated')
      }, false)
    })
})()