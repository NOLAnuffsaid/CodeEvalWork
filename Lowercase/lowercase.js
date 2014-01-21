var fs = require('fs');

fs.readFile(process.argv[2],{encoding: 'utf8', flag: 'r'}, function(err, data) {
  if (err) {
    throw err;
  }
  process.stdout.write(data.toString().toLowerCase() + '\n');
});