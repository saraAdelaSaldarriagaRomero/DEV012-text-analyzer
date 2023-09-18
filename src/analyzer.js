// analyzer.js

const analyzer = {
  getWordCount(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
  },

  getCharacterCount(text) {
    return text.length;
  },

  getCharacterCountExcludingSpaces(text) {
    const textWithoutSpaces = text.replace(/\s/g, '');
    return textWithoutSpaces.length;
  },

  getNumberCount(text) {
    const numbersArray = text.match(/\d+/g);
    return numbersArray ? numbersArray.length : 0;
  },

  getNumberSum(text) {
    const numbersArray = text.match(/\d+/g);
    return numbersArray ? numbersArray.reduce((acc, val) => acc + parseInt(val), 0) : 0;
  },

  getAverageWordLength(text) {
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
    const wordLengthAverage = wordCount === 0 ? 0 : (totalWordLength / wordCount).toFixed(2);
    return parseFloat(wordLengthAverage); // Parse to float to ensure 2 decimal places.
  },
};




export default analyzer;


