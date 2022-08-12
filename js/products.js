const Autos_url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

document.addEventListener('DOMContentLoaded', async function () {
    let contenedor_lista = document.getElementById('lista_productos');
    const result = await getJSONData(Autos_url)

    //vaciamos el <ul>..</ul>
    contenedor_lista.innerHTML = "";
    for (let producto of result.data.products) {
        //agregamos un <li>.. </li> por cada producto que recorre el for()
        contenedor_lista.innerHTML +=
         `<li id='${ producto.id } '>${producto.name}</li>`;
    }
})