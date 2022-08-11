const Autos_url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

function getJSONData(url) {
    let result = {};
    showSpinner()
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function (response) {
            result.status = 'ok';
            result.data = response;
            hideSpinner()
            return result;
        })
        .catch(function (error) {
            result.status = 'error';
            result.data = error;
            hideSpinner();
            return result;
        });
}
 
for(let producto of response.data.products){
    console.log(...product);
    }