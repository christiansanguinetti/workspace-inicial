const Autos_url = "https://japceibal.github.io/emercado-api/cats_products/101.json"


document.addEventListener('DOMContentLoaded', async function () {
    let contenedor_lista = document.getElementById('lista_productos');
    const result = await getJSONData(Autos_url)

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

