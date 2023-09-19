// analyzer.js

const analyzer = {
  getWordCount(text) {
    if (text) {
      const words = text.trim().split(/\s+/);
      return words.length;
    } else {
      return 0;
    }
  },

  getCharacterCount(text) {
    if (text) {
      return text.length;
    } else {
      return 0;
    }
  },

  getCharacterCountExcludingSpaces(text) {
    if (text) {
      let count = 0;
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
          count++;
        }
      }
      return count;
    } else {
      return 0;
    }
  },

  getNumberCount(text) {
    if (text) {
      const numbersArray = text.match(/\d+/g);
      return numbersArray ? numbersArray.length : 0;
    } else {
      return 0;
    }
  },

  getNumberSum(text) {
    if (text) {
      const numbersArray = text.match(/\d+/g);
      if (numbersArray) {
        let sum = 0;
        for (let i = 0; i < numbersArray.length; i++) {
          sum += parseFloat(numbersArray[i]);
        }
        return sum;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  },

  getAverageWordLength(text) {
    if (text) {
      const words = text.trim().split(/\s+/);
      const wordCount = words.length;
      if (wordCount > 0) {
        let totalWordLength = 0;
        for (let i = 0; i < wordCount; i++) {
          totalWordLength += words[i].length;
        }
        const wordLengthAverage = (totalWordLength / wordCount).toFixed(2);
        return parseFloat(wordLengthAverage);
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  },
};




export default analyzer;

