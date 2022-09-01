let catID = localStorage.getItem("catID")
const productos_url = "https://japceibal.github.io/emercado-api/cats_products/" + catID + ".json"
const container = document.getElementById("container");
const boton_asc = document.getElementById("Ascendente");
const boton_des = document.getElementById("Descendente");
const por_sold_count = document.getElementById("sortByCount");
const inputMax = document.getElementById("rangeFilterCountMax")
const inputMin = document.getElementById("rangeFilterCountMin")
const filter = document.getElementById("rangeFilterCount")
const limpiar = document.getElementById("clearRangeFilter");

document.addEventListener('DOMContentLoaded', async function () {
    let contenedor_lista = document.getElementById('lista_productos');
    const result = await getJSONData(productos_url)

    contenedor_lista.innerHTML = "";
    for (let producto of result.data.products) {

        contenedor_lista.innerHTML +=
            `
        <div onclick="setCatID(${producto.id})" class="list-group-item list-group-item-action cursor-active">
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
})
function showData(array) {
    for (let producto of array) {

        contenedor_lista.innerHTML +=
            `
    <div onclick="setCatID(${producto.id})" class="list-group-item list-group-item-action cursor-active">
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


fetch(productos_url).then(function (response) {
    return response.json();
}).then(function (data) {
    showData(newArray);
});
//ordeno dependiendo la cantidad vendida
function ordenarSoldCount(array) {
    array.sort((a, b) => {
        if (a.soldCount < b.soldCount) return 1;
        if (a.soldCount > b.soldCount) return -1;
        return 0;
    })
};
ordenarSoldCount.addEventListener("click", () => {
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
        if (a.cost < b.cost) return -1;
        if (a.cost > b.cost) return 1;
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

//ordeno array forma descendente
function ordenar_ascendente(array) {
    array.sort((a, b) => {
        if (a.cost > b.cost) return -1;
        if (a.cost < b.cost) return 1;
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

//ordeno array por precio descendente

