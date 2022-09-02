function validar(){
    let usuario = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;
     
    if (usuario && password !==0){
        alert("usuario y password validos")
        localStorage.setItem("usuario", usuario)
        return window.location="principal.html";
    }else{
        alert("usuario y password invalidos")
    }
}
