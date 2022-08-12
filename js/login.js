/*function validar(){
    var email = document.getElementById("floatingInput").value;
    var password = document.getElementById("floatingPassword").value;
    
    if (email && password !==0)
    window.location="principal.html";
}*/
function Login(){ 
    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    if (usuario=="USUARIO1" && password=="CONTRASEÑA1")  
    window.location="principal.html"; 
}