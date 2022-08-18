function validar(){
    var email = document.getElementById("floatingInput").value;
    var password = document.getElementById("floatingPassword").value;
     
    if (email && password !==0){
        alert("usuario y password validos")
        return window.location="principal.html"
    }else{
        alert("usuario y password invalidos")
    }
}