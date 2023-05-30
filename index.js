function encriptarTexto() {
    var textoOriginal = document.getElementById("textoOriginal").value;
    var textoEncriptado = encriptarTextoCesar(textoOriginal);
    document.getElementById("textoEncriptado").value = textoEncriptado;
  }

  function desencriptarTexto() {
    var textoEncriptado = document.getElementById("textoEncriptado").value;
    var textoOriginal = desencriptarTextoCesar(textoEncriptado);
    document.getElementById("textoOriginal").value = textoOriginal;
  }

  function encriptarTextoCesar(texto) {
    var desplazamiento = 3; 

    var textoEncriptado = "";

    for (var i = 0; i < texto.length; i++) {
      var caracter = texto[i];

      // Solo letras
      if (caracter.match(/[a-z]/i)) {
        var codigoAscii = texto.charCodeAt(i);

    
        var limiteAscii = caracter === caracter.toUpperCase() ? 90 : 122;
        var encriptadoAscii = ((codigoAscii - limiteAscii + desplazamiento) % 26) + limiteAscii;

        caracter = String.fromCharCode(encriptadoAscii);
      }

      textoEncriptado += caracter;
    }

    return textoEncriptado;
  }
  
  function desencriptarTextoCesar(textoEncriptado) {
    var desplazamiento = 3; 

    var textoOriginal = "";

    for (var i = 0; i < textoEncriptado.length; i++) {
      var caracter = textoEncriptado[i];

      // Solo desencriptar letras
      if (caracter.match(/[a-z]/i)) {
        var codigoAscii = textoEncriptado.charCodeAt(i);

        var limiteAscii = caracter === caracter.toUpperCase() ? 65 : 97;
        var desencriptadoAscii = ((codigoAscii - limiteAscii - desplazamiento + 26) % 26) + limiteAscii;

        caracter = String.fromCharCode(desencriptadoAscii);
      }

      textoOriginal += caracter;
    }

    return textoOriginal;
  }