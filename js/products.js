let catID = localStorage.getItem("catID")
const productos_url = "https://japceibal.github.io/emercado-api/cats_products/" + catID + ".json"
const container = document.getElementById("container");
const boton_asc = document.getElementById("Ascendente");
const boton_des = document.getElementById("Descendente");
const por_sold_count = document.getElementById("sortByCount");
const inputMax = document.getElementById("rangeFilterCountMax")
const inputMin = document.getElementById("rangeFilterCountMin")
const filtrar = document.getElementById("rangeFilterCount")
const limpiar = document.getElementById("clearRangeFilter");
const lista = document.getElementById("lista_productos")

document.addEventListener('DOMContentLoaded', async function () {
    pongo_correo()
    let contenedor_lista = document.getElementById('lista_productos');
    const result = await getJSONData(productos_url)
    
    contenedor_lista.innerHTML = "";
    for (let producto of result.data.products) {

        contenedor_lista.innerHTML +=
            `
        <div (${producto.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row" onClick = "abrir_producto(${producto.id})"> 
                <div class="col-3">
                    <img src="${producto.image}" alt="${producto.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${producto.name} ${producto.currency} ${producto.cost}</h4>
                        <small class="text-muted">${producto.soldCount} artículos</small>
                    </div>
                    <p class="mb-1">${producto.description}</p>
                </div>
            </div>
        </div>
        `

    }
})
function showData(array) {
    let contenedor_lista = document.getElementById('lista_productos');
    contenedor_lista.innerHTML = ""
    for (let producto of array) {

        contenedor_lista.innerHTML +=
            `
    <div (${producto.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="row">
            <div class="col-3">
                <img src="${producto.image}" alt="${producto.description}" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${producto.name} ${producto.currency} ${producto.cost}</h4>
                    <small class="text-muted">${producto.soldCount} artículos</small>
                </div>
                <p class="mb-1">${producto.description}</p>
            </div>
        </div>
    </div>
    `
    }
}


limpiar.addEventListener("click", () => {
    inputMax.value = ""
    inputMin.value = ""
});

//ordeno dependiendo la cantidad vendida
function ordenarSoldCount(array) {
    array.sort((a, b) => {
        if (a.soldCount < b.soldCount) return 1;
        if (a.soldCount > b.soldCount) return -1;
        return 0;
    })
    return array
};
por_sold_count.addEventListener("click", () => {
    fetch(productos_url).then(function (response) {
        return response.json();
    }).then(function (data) {
        let newArray = ordenarSoldCount(data.products);
        showData(newArray);
    });

})

//ordeno array por precio ascendente
function ordenar_ascendente(array) {
    array.sort((a, b) => {
        if (a.cost < b.cost) return 1;
        if (a.cost > b.cost) return -1;
        return 0;
    })
    return array;
}
boton_asc.addEventListener("click", () => {
    fetch(productos_url).then(function (response) {
        return response.json();
    }).then(function (data) {
        let newArray = ordenar_ascendente(data.products);
        showData(newArray)
    });

})
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

//ordeno array forma descendente
function ordenar_descendente(array) {
    array.sort((a, b) => {
        if (a.cost > b.cost) return 1;
        if (a.cost < b.cost) return -1;
        return 0;
    })
    return array;
}
boton_des.addEventListener("click", () => {
    fetch(productos_url).then(function (response) {
        return response.json();
    }).then(function (data) {
        let newArray = ordenar_descendente(data.products);
        showData(newArray)
    });

})

filtrar.addEventListener("click", () => {
    fetch(productos_url).then(function (response) {
        return response.json();
    }).then(function (data) {
        let lista_filtrada = data.products.filter((producto) => producto.cost >= inputMin.value && producto.cost <= inputMax.value)
        showData(lista_filtrada)
    });
})

function abrir_producto(id) {
    fetch(productos_url).then(function (response) {
        return response.json();
    }).then(function (data) { 
        localStorage.setItem("producto_id",id)
        window.location = "product-info.html"
    })
}