function encriptar(){
    let texto= document.getElementById("input-texto").value.toLowerCase();
    //i para que afecte tanto mayusculas como minusculas de letra
    // g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos
    var textoCifrado= texto.replace(/e/igm,"enter");
    var textoCifrado= textoCifrado.replace(/i/igm,"imes");
    var textoCifrado= textoCifrado.replace(/a/igm,"ai");
    var textoCifrado= textoCifrado.replace(/o/igm,"ober");
    var textoCifrado= textoCifrado.replace(/u/igm,"ufat");
    //para que cuando toque el boton de encriptar me desaparece la imagen
    document.getElementById("img-right").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto-2").innerHTML= textoCifrado;
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display="inherit";
    


}
function desencriptar(){
    let texto= document.getElementById("input-texto").value.toLowerCase();
    //i para que afecte tanto mayusculas como minusculas de letra
    // g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos
    var textoCifrado= texto.replace(/enter/igm,"e");
    var textoCifrado= textoCifrado.replace(/imes/igm,"i");
    var textoCifrado= textoCifrado.replace(/ai/igm,"a");
    var textoCifrado= textoCifrado.replace(/ober/igm,"o");
    var textoCifrado= textoCifrado.replace(/ufat/igm,"u");
    //para que cuando toque el boton de encriptar me desaparece la imagen
    document.getElementById("img-right").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto-2").innerHTML= textoCifrado;
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display="inherit";
    


}
 function copiar(){
    var contenido= document.querySelector("#texto-2")
    contenido.select();
    document.execCommand("cut");
    alert("Se copió");
 }





    