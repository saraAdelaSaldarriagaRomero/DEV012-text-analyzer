// Importa el objeto `analyzer` desde "./analyzer.js"
import analyzer from "./analyzer.js";

// Escuchar Eventos del DOM
const textarea = document.querySelector("textarea");// Selecciona el primer elemento <textarea> en el documento HTML actual
const lis = document.querySelectorAll ("li.metric-item");
const resetButton = document.getElementById("reset-button");

function updateMetrics() {
  const text = textarea.value;// Obtener el contenido del elemento <textarea> y almacenarlo en la variable 'text'.

  // Invocamos los metodos del objeto
  const wordCount = analyzer.getWordCount(text);// Utiliza el método getWordCount del objeto analyzer para contar las palabras en el texto proporcionado (almacenado en la variable 'text').
  const characterCount = analyzer.getCharacterCount(text);
  const characterNoSpacesCount = analyzer.getCharacterCountExcludingSpaces(text);
  const numberCount = analyzer.getNumberCount(text);
  const numberSum = analyzer.getNumberSum(text);
  const wordLengthAverage = analyzer.getAverageWordLength(text);

  // Actualizando el resultado en la interfaz de usuaria
  lis[0].textContent = `Recuento de palabras: ${wordCount}`;
  // Actualiza el texto dentro de un elemento de la lista (<li>).la propiedad.textContent se está utilizando para modificar el contenido de texto dentro del elemento HTML representado por lis[0].
  // Este elemento es el primero en la lista (lis[0]).
  // El nuevo texto muestra el recuento de palabras calculado, como "Recuento de palabras: ".
  lis[1].textContent = `Recuento de caracteres: ${characterCount}`;
  lis[2].textContent = `Recuento de caracteres (sin espacios): ${characterNoSpacesCount}`;
  lis[3].textContent = `Recuento de números: ${numberCount}`;
  lis[4].textContent = `Suma total de números: ${numberSum}`;
  lis[5].textContent = `Longitud media de palabras: ${wordLengthAverage}`;
}

// Agrega un escuchador de eventos de "input" al elemento `textarea`
textarea.addEventListener("input", updateMetrics);

// Agrega un escuchador de eventos de clic al botón de "reset"
resetButton.addEventListener("click", () => {
  textarea.value = ""; //Esto borra el contenido del elemento 
  updateMetrics();
}
// establecen dos "escuchadores de eventos" en la página web. Uno escucha cambios en el área de texto y llama a updateMetrics cuando se escriben cosas. El otro escucha clics en el botón de "reset" y borra el contenido del área de texto, luego actualiza las métricas de texto
);
