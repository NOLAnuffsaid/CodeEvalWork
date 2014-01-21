/*
REVERSE THE WORD ORDER OF A SENTENCE
*/
var fs = require('fs'),
  file = process.argv[2];

fs.readFile(
  file, 
  {
    encoding: 'utf8',
    flag: 'r'
  }, 
  function(err, data) {
    var lineRegX = /(.+)[^\s\n]/g,
      wordRegX = /(\w+)/g,
      sentences = [],
      words = [],
      foundSent = [],
      foundWord = [];

    while ((foundSent = lineRegX.exec(data)) !== null) {
      sentences.push(foundSent[0]);
    }

    for (var i = 0; i < sentences.length; i++) {
      if (sentences[i] !== " ") {
        while ((foundWord = wordRegX.exec(sentences[i])) !== null) {
          words.push(foundWord[0]);
        }
        console.log(words.reverse().toString().replace(/,/g, " "));
        words = [];        
      }
    }    
  }
);