// const fs = require('fs');

// fs.readFile('c:\\Users\\HP\\Desktop\\practical\\Nodejs\\fs\\foie.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File contents:', data);
// });

const fs = require('fs');

fs.readFile('c:\\Users\\HP\\Desktop\\practical\\Nodejs\\fs\\foie.txt', 'utf8', (err, data) => {
  if(err){
    console.log('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});