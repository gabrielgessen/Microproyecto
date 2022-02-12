alert("Se ha cargado exitósamente JS")
const transactionForm = document.getElementById('addNewForm');
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const telf = document.getElementById("telf");
const men = document.getElementById("mensaje");
var inputs = document.getElementsByClassName('formulario_input');

for(var i=0;  i<inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1 ){
            this.nextElementSibling.classList.add('fijar');
        }else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

function isNumeric(val) {
    return /^-?\d+$/.test(val);
}

transactionForm.addEventListener("submit", function(event){

    event.preventDefault();
    
    const nombres= nombre.value;
    const apellidos= apellido.value;
    const correos= correo.value;
    const telfs= telf.value;
    const mens= men.value;

    if(!nombres || !apellidos || !correos || !telfs ){
        alert("Datos incompletos en el form");
        return;
    }else if (!isNumeric(telfs)){
        alert("El valor de número de teléfono debe ser númerico.");
        return;
    }

    console.log("Nombre: "+nombres, "; Apellido: "+ apellidos, "; Correo: "+ correos, "; Teléfono: "+ telfs, "; Mensaje: "+ mens);
    console.log("Form enviado");
});


