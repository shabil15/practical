const fs = require('fs');

const content = new Date().toISOString();

fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error('An error occurred while writing to the file:', err);
    } else {
        console.log('File has been written successfully.');
    }
});