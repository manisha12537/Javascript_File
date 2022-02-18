var fs = require('fs');

fs.rename('practice_file', 'rename.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
})