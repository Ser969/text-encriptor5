function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo")
    let titere = document.getElementById("titere");

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"


    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

   if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con exito";
      parrafo.textContent = "";
      titere.src = "./img/encriptado.jpg";
 } else {
    titere.src = "./img/Muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algun texto");
 }
}

function desencriptar () {
   let texto = document.getElementById("texto").value;
   let tituloMensaje = document.getElementById("titulo-mensaje");
   let parrafo = document.getElementById("parrafo")
   let titere = document.getElementById("titere");

   let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

   if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con exito";
      parrafo.textContent = "";
      titere.src = "./img/desencriptado.jpg";  
   } else {
      titere.src = "./img/Muñeco.png";
      tituloMensaje.textContent = "Ningun mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algun texto");
   }

}
