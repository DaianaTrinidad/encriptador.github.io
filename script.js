// texto donde pongo el texto para encriptarlo
const textoAEncriptar= document.querySelector(".text-i");
//texto encriptado
const textoEncriptado= document.querySelector("#texto-2");

const codigoReemplazado= [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

// Texto encriptado
function btnEncriptar(){
//me muestra el valor del texto que ingrese encriptado porque le pase la funcion encriptar
const texto= encriptar(textoAEncriptar.value);
textoEncriptado.value=texto;
}

function encriptar(fraseEncriptada){
 for(let i = 0 ; i < codigoReemplazado.length; i++){
   if(fraseEncriptada.includes(codigoReemplazado[i][0])){
   fraseEncriptada= fraseEncriptada.replaceAll(
   codigoReemplazado[i][0],
    codigoReemplazado[i][1]
   )
   }
 }
return fraseEncriptada;
};

// Texto desencriptado
function btnDesencriptar(){
 const textoDos= desencriptar(textoEncriptado.value);
 textoEncriptado.value=textoDos;
}
function desencriptar(textoDesencriptado){
    for(let i = 0 ; i < codigoReemplazado.length; i++){
        if(textoDesencriptado.includes(codigoReemplazado[i][1])){
        textoDesencriptado= textoDesencriptado.replaceAll(
        codigoReemplazado[i][1],
         codigoReemplazado[i][0]
        )
        }
      }
     return textoDesencriptado;
     };
