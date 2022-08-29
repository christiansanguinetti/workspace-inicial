let catID = localStorage.getItem("catID")
const productos_url = "https://japceibal.github.io/emercado-api/cats_products/" + catID + ".json"


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

const ordenar_desc = "-$";
const ordenar_ascd = "+$";
const ORDER_BY_PROD_COUNT = "Cant.";
function Ordenar() {
    let result = [];
    if (criteria === ordenar_desc)
    {        
      result = producto.sort((a, b) => {
        if (a.cost < b.cost) { return -1; }
        if (a.cost > b.cost) { return 1; }
        return 0;
      })
    } else if (criteria === ordenar_ascd){
     result = producto.sort((a, b) => {
        if (a.cost > b.cost) { return -1 }
        if (a.cost < b.cost) { return 1 }
        return 0;
    })
}
}

document.getElementById("sortAsc").addEventListener("click", function(){
    sortAndShowCategories(ORDER_ASC_BY_NAME);
});

document.getElementById("sortDesc").addEventListener("click", function(){
    sortAndShowCategories(ORDER_DESC_BY_NAME);
});