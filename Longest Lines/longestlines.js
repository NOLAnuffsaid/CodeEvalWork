var fs = require('fs'),
  file = process.argv[2],
  sentenceRegX = /(.*)[^\n]/g,
  sentences = [],
  foundSentence,
  sortedSentences = [],
  numOfOutput,
  i;

function isLongest (sentence1, sentence2) {
  return sentence2.length - sentence1.length;
}

fs.readFile(
  file,
  {
    encoding: 'utf8',
    flag: 'r'
  },
  function(err, data) {
    while((foundSentence = sentenceRegX.exec(data)) !== null) {
      sentences.push(foundSentence[0]);
    }
    numOfOutput = sentences[0];
    sortedSentences = sentences.sort(isLongest).map(function(element) {
      return element;
    });

    for (i = 0; i < numOfOutput; i++) {
      console.log(sortedSentences[i]);
    }
  }
);