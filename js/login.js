function validar(){
    var email = document.getElementById("floatingInput").value;
    var password = document.getElementById("floatingPassword").value;
    
    if (email && password !==0)
    window.location="principal.html";
}