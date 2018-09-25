//SOLO NUMEROS
$('.input-number').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

//SOLO LETRAS
$('.input-text').on('input', function () {
    this.value = this.value.replace(/[^A-Za-z\s]/g, '');
});

// Formato RUT + validacion DV
$('.input-rut').on('input', function () {
    this.value = this.value.replace(/[^kK0-9\_]/g, '');
    let value = this.value;
    if (value.length > 1) {
        value = value.substring(0, value.length - 1) + '-' + value.substring(value.length - 1, value.length);
    }
    if (value.length > 5) {
        value = value.substring(0, value.length - 5) + '.' + value.substring(value.length - 5, value.length);
    }
    if (value.length > 9) {
        value = value.substring(0, value.length - 9) + '.' + value.substring(value.length - 9, value.length);
    }
    this.value = value;
    if (value.length >= 11) {
        let valor = value.replace(".", "").replace(".", "");
        //Remueve y agrega texto error
        Fn.validaRut(valor) ? $( "#isValidRut" ).empty() : $("#isValidRut").append( "<p>Rut inválido, por favor verifíquelo</p>" );
    }
});
var Fn = {
    validaRut: function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(rut) == digv);
    },
    dv: function (T) {
        var M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}

// Formato Fecha con separador tipo / + validador fecha
$('.input-date').on('input', function () {
    this.value = this.value.replace(/[^0-9\_]/g, '');
    let value = this.value;
    if (value.length > 4) {
        value = value.substring(0, value.length - 4) + '/' + value.substring(value.length - 4, value.length);
    }
    if (value.length > 7) {
        value = value.substring(0, value.length - 7) + '/' + value.substring(value.length - 7, value.length);
    }
    this.value = value;
    if (value.length > 9) {
        //Remueve y agrega texto de error
        birth(value) ? $( "#isValidDate" ).empty() : $("#isValidDate").append( "<p>Fecha inválida, por favor verifíquela</p>" );
    }
});
function birth(dateString) {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;
    var parts = dateString.split("/");
    var month = parseInt(parts[1], 10);
    var day = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    if (year < 1900 || year > 2020 || month == 0 || month > 12)
        return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];
};

// Formato Celular con prefijo siempre presente
$(".input-telefono").keydown(function (e) {
    this.value = this.value.replace(/[^+0-9\_]/g, '');
    var oldvalue = $(this).val();
    var field = this;
    setTimeout(function () {
        if (field.value.indexOf('+569') !== 0) {
            $(field).val(oldvalue);
        }
    }, 1);
});

// Formato punto a miles
function formatNumber (n) {
    n = String(n).replace(/\D/g, "");
    return n === '' ? n : Number(n).toLocaleString("es-CL");
}
$(".addDot").on('input', function (e) {
    let element = e.target;
    let value = element.value;
    element.value = formatNumber(value);
});

//Selectize Checkbox
$(function() {
    $('#ms').change(function() {
        console.log($(this).val());
    }).multipleSelect({
        width: '100%',
        minimumCountSelected: 6
    });
});

// Selectize select group

    $('#input-tags').selectize({
        persist: false,
        createOnBlur: true,
        create: true
    });

// Selectize autocomplete

$('#select-beast').selectize({
    create: true,
    sortField: {
        field: 'text',
        direction: 'asc'
    },
    dropdownParent: 'body'
});

//input fecha datepicker

jQuery(document).ready(function(){
    jQuery('.datepicker2').datepicker();
});

// input moneda

$(".addDot").on('input', function (e) {
    let element = e.target;
    let value = element.value;
    element.value = formatNumber(value);
});

//input fecha 3 input

function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}


$('.input-dia').attr('maxLength', '2').keypress(limitMe);
$('.input-mes').attr('maxLength', '2').keypress(limitMe);
$('.input-anno').attr('maxLength', '4').keypress(limitMe);

// input email

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  }
  
  $("#email").bind("keyup", validate);

  $('#email').keypress(function() {
    validate();
});
