const fs = require('fs');

fs.appendFile('message.txt', 'Hello node', function (err) {
  if (err) throw err;
  console.log('message.txt was updated!');
});