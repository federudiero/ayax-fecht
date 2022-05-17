let botonWhatsapp=document.getElementById("boton-whatsapp");
let formWhatsapp=document.getElementById("form-Whatsapp");
let btnEnviarwts=document.getElementById("btnEnviarwts");





botonWhatsapp.addEventListener("click",function() {
    formWhatsapp.classList.toggle("entrarysalir")
    
})



btnEnviarwts.addEventListener("click",enviarMensaje)

function enviarMensaje(){

    let inputName= document.getElementById("nombre").value
    let textAreaMensaje= document.getElementById("mensaje").value
    let url = "https://api.whatsapp.com/send?phone=3518120950&text=Nombre: %0A" + inputName + "%0A%0AMensaje: %0A" + textAreaMensaje + "%0A";
			window.open(url);

    
}
