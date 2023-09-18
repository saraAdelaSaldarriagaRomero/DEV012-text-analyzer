// Importa el objeto `analyzer` desde "./analyzer.js"
import analyzer from "./analyzer.js";

// Obtén referencias a los elementos del DOM
const textarea = document.querySelector("textarea");
const lis = document.querySelectorAll("li.metric-item");
const resetButton = document.getElementById("reset-button");

function updateMetrics() {
  const text = textarea.value;

  // Usa los métodos del objeto `analyzer` para obtener resultados
  const wordCount = analyzer.getWordCount(text);
  const characterCount = analyzer.getCharacterCount(text);
  const characterNoSpacesCount = analyzer.getCharacterCountExcludingSpaces(text);
  const numberCount = analyzer.getNumberCount(text);
  const numberSum = analyzer.getNumberSum(text);
  const wordLengthAverage = analyzer.getAverageWordLength(text);

  // Actualiza las métricas basadas en los resultados de análisis
  lis[0].textContent = `Recuento de palabras: ${wordCount}`;
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
  textarea.value = "";
  updateMetrics();
});
