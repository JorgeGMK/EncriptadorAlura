function encriptar(){

    var texto = document.getElementById("textoIntroducido").value.toLowerCase();

    var textoIntroducido = texto.replace(/e/img, "enter");
    var textoIntroducido = textoIntroducido.replace(/o/img, "ober");
    var textoIntroducido = textoIntroducido.replace(/i/img, "imes");
    var textoIntroducido = textoIntroducido.replace(/a/img, "ai");
    var textoIntroducido = textoIntroducido.replace(/u/img, "ufat");

    document.getElementById("Respuesta").innerHTML=textoIntroducido;
}

function desencriptar(){

    var texto = document.getElementById("textoIntroducido").value.toLowerCase();

    var textoIntroducido = texto.replace(/enter/img, "e");
    var textoIntroducido = textoIntroducido.replace(/ober/img, "o");
    var textoIntroducido = textoIntroducido.replace(/imes/img, "i");
    var textoIntroducido = textoIntroducido.replace(/ai/img, "a");
    var textoIntroducido = textoIntroducido.replace(/ufat/img, "u");

    document.getElementById("Respuesta").innerHTML=textoIntroducido;
}

function copiar(){

    var areaTexto = document.querySelector("#Respuesta");
    areaTexto.select();
    document.execCommand("copy");
}
