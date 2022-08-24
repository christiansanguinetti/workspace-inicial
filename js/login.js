function validar(){
    var usuario = document.getElementById("floatingInput").value;
    var password = document.getElementById("floatingPassword").value;
     
    if (usuario && password !==0){
        alert("usuario y password validos")
        localStorage.setItem("usuario", usuario)
        let ejemplo = localStorage.getItem('usuario' )
        return window.location="principal.html";
    }else{
        alert("usuario y password invalidos")
    }
}