const fs = require('fs');


const readStream = fs.createReadStream('./docs/testData.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blogs1.txt');

// readStream.on('data', (chunk) => {
// console.log("----New Chunk----");
// console.log(chunk);
// writeStream.write('\nNew Chunk\n');
// writeStream.write(chunk)
// })

readStream.pipe(writeStream);