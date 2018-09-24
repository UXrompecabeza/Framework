
// CARGAR FUNCIONES APENAS EL USUARIO ENTRE EN EL SITIO
$( document ).ready(function() {
    validaRut();
    validaTexto();
    solonumber();


    jQuery(document).ready(function() {
        jQuery('.input_tel').keypress(function(tecla) {
            if(tecla.charCode < 48 || tecla.charCode > 57) return false;
        });
    });
})


function validaRut() {
    $(".input-rut").rut({formatOn: 'keyup'});
    function limitMe(e) {
        if (e.keyCode == 8) { return true; }
        return this.value.length < $(this).attr("maxLength");
    }
    $('.input-rut').attr('maxLength', '12').keypress(limitMe);
}

function solonumber(){
$("#inputTelefono").keydown(function(event) {
    if(event.shiftKey)
    {
         event.preventDefault();
    }

    if (event.keyCode == 46 || event.keyCode == 8)    {
    }
    else {
         if (event.keyCode < 95) {
           if (event.keyCode < 48 || event.keyCode > 57) {
                 event.preventDefault();
           }
         } 
         else {
               if (event.keyCode < 96 || event.keyCode > 105) {
                   event.preventDefault();
               }
         }
       }
    });
}

$(function(){
    $('#miformulario').validate({
        rule: {
            inputNombre: {
                required: true
            },
            inputRut: {
                required: true
            },
            inputEmail: {
                required: true
            },
            inputFechaNacimiento: {
                required: true,
                max: "2000-12-31"

            },
            inputTelefono: {
                required: true
                
            },
            inputregion: {
                required: true
            },
            inputCiudad: {
                required: true
            },
            inputtipo: {
                required: true
            }

        },
        messages: {
            inputNombre: {
                required: "Tu nombre es requerido.",
                minlength: "El largo es insuficiente."
            },
            inputFechaNacimiento:{
                required: "Tu fecha de nacimiento es requerido",
                max: "La fecha no debe ser mayor al año 2001."
            },
            inputEmail: {
                required: "Tu email es requerido.",
                inputEmail: "Formato de email no es valido."
            },
            inputRut:{
                required: "Tu rut es requerido.",
            },
            inputTelefono: {
                required: "Ingrese un telefono."
            },
            inputCiudad: {
                required: "Ingrese una ciudad."
            },
            inputtipo: {
                required: "Ingrese un tipo de vivienda."
            },
            inputregion: {
                required: "Ingrese una región."
            }

        }
    })
})


function validaTexto() {
$("#inputNombre").keypress(function (key) {
    window.console.log(key.charCode)
    if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
        && (key.charCode < 65 || key.charCode > 90) //letras minusculas
        && (key.charCode != 45) //retroceso
        && (key.charCode != 241) //ñ
         && (key.charCode != 209) //Ñ
         && (key.charCode != 32) //espacio
         && (key.charCode != 225) //á
         && (key.charCode != 233) //é
         && (key.charCode != 237) //í
         && (key.charCode != 243) //ó
         && (key.charCode != 250) //ú
         && (key.charCode != 193) //Á
         && (key.charCode != 201) //É
         && (key.charCode != 205) //Í
         && (key.charCode != 211) //Ó
         && (key.charCode != 218) //Ú
        )
        return false;
   });
}


