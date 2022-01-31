var input=document.querySelector("#input-texto");
var resultado=document.querySelector("#msg");

var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
})

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
})

var botonCopiar = document.querySelector("#btn-copy");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
})

var textoValido=true;
input.focus();


function encriptarTexto(){
var vocales=[/e/g,/i/g,/a/g,/o/g,/u/g];
var vocalesEncriptadas=["enter","imes","ai","ober","ufat"];
var texto=input.value;
    if (textoValido=true){ 
        for (var i=0; i < vocales.length ; i++ ) {
        var textoencriptado = texto.replace(vocales[i], vocalesEncriptadas[i]);
        texto=textoencriptado;
        }
    resultado.value=texto;
    } 
    else {
        resultado.value="";
    }
}

function desencriptarTexto(){
var vocalesEncriptadas=[/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g];
var vocales=["e","i","a","o","u"];
var texto=input.value;
    if (textoValido=true){ 
        for (var i=0; i < vocales.length ; i++ ) {
        var textodesencriptado = texto.replace(vocalesEncriptadas[i], vocales[i]);
        texto=textodesencriptado;
        }
    resultado.value=texto;
    }
    else {
        resultado.value="";
        }
    }

function copiar() {
        var copyText = document.querySelector("#msg");
        copyText.select();
        document.execCommand("copy");
        mostrarAlerta();
      }

function mostrarAlerta(){
        alert("Mensaje copiado");
      }
      
botonEncriptar.onclick=encriptarTexto;

botonDesencriptar.onclick=desencriptarTexto;

botonCopiar.onclick=copiar;