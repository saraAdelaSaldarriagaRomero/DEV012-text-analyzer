// analyzer.js

// Creamos un objeto llamado 'analyzer'
const analyzer = {

  // Método para contar palabras en un texto
  getWordCount(text) {
    // Elimina todos los números del texto
    let cadena = text.replace(/[0-9]/g, "");
    // Elimina espacios en blanco al inicio y al final del texto
    cadena = cadena.trim();

    // Si el texto está vacío, retorna 0
    if (cadena === "") {
      return 0;
    } else {
      // Contador de palabras
      let contarPalabra = 0;
      // Variable que indica si estamos dentro de una palabra
      let enPalabra = false;

      // Iteramos sobre el texto
      for (let i = 0; i < cadena.length; i++) {
        const character = cadena[i];// asigno el valor al caracter que este en la posisin i
        if (/\s/.test(character)) {
          enPalabra = false;// estamos en un espacio en blanco
        } else if (!enPalabra) {
          // Si no estamos en una palabra y encontramos un carácter no espaciado, contamos una nueva palabra.
          contarPalabra++;
          enPalabra = true;
        }
      }

      return contarPalabra;
    }
  },

  // Método para contar caracteres en un texto
  getCharacterCount(text) {
    // Si el texto existe, retorna su longitud
    if (text) {
      return text.length;
    } else {
      return 0;
    }
  },

  // Método para contar caracteres excluyendo espacios en un texto
  getCharacterCountExcludingSpaces(text) {
    // Si el texto existe
    if (text) {
      // Limpia el texto de caracteres especiales
      const textoLimpio = text.replace(/[.,/#!$%^&*;:{}=\-_`~()?¿]/g, "");
      // Elimina todos los espacios en blanco
      const textoSinEspacios = textoLimpio.replace(/\s+/g, "");

      // Retorna la longitud del texto sin espacios
      return textoSinEspacios.length;
    } else {
      return 0;
    }
  },

  // Método para contar números en un texto
  getNumberCount(text) {
    // Si el texto existe
    if (text) {
      // Encuentra y retorna la cantidad de números en el texto
      const contarNumeros = text.match(/\b\d+(\.\d+)?\b/g);
      return contarNumeros ? contarNumeros.length : 0;
    } else {
      return 0;
    }
  },

  // Método para sumar números en un texto
  getNumberSum(text) {
    // Encuentra todos los números (enteros y decimales)
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);

    // Si no se encontraron números, retorna 0
    if (numbers === null) {
      return 0;
    }

    // Realiza la suma de los números
    const sum = numbers.reduce((total, num) => {
      const parsedNum = parseFloat(num);
      // Verifica si el número es válido antes de sumarlo
      if (!isNaN(parsedNum)) {
        return total + parsedNum;
      }
      return total;
    }, 0);

    return sum;
  },

  // Método para obtener la longitud promedio de las palabras en un texto
  getAverageWordLength(text) {
    // Limpia el texto de números
    const textoLimpio = text.replace(/[0-9]/g, "");
    // Elimina espacios en blanco al inicio y al final del texto
    const textoSinEspacios = textoLimpio.trim();

    // Si el texto está vacío, retorna 0
    if (textoSinEspacios === "") {
      return 0;
    } else {
      // Limpia el texto de espacios en blanco
      const palabrasSinEspacios = textoSinEspacios.replace(/\s+/g, "");
      // Divide el texto en un array de palabras
      const palabrasArray = textoSinEspacios.split(/\s+/g);

      // Calcula la longitud promedio de las palabras
      const longitudPromedio = palabrasSinEspacios.length / palabrasArray.length;

      // Redondea la longitud promedio a dos decimales
      const longitudRedondeada = parseFloat(longitudPromedio.toFixed(2));

      return longitudRedondeada;
    }
  },
};

// Exporta el objeto 'analyzer' para poder usarlo en otros archivos
export default analyzer;
