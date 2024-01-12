const fs = require('fs');
const { Transform } = require('stream');
const readstream = fs.createReadStream(__dirname+'/run.txt');
const fileWriteStream = fs .createWriteStream(__dirname+'/write.txt');

/* read data from run.txt chunk wise chunk and convert those into uppercase
 and print data data */
const transFormedStream = new Transform({
    objectMode: true,
    transform(chunk,enc,cb){
         this.push(chunk.toString().toUpperCase());
         setTimeout(cb,3000);
    }
})

const writeStream = process.stdout;
const outputStream = readstream.pipe(transFormedStream);

outputStream.pipe(fileWriteStream);
outputStream.pipe(writeStream);

// const writeStream = process.stdout;
// readstream
// .pipe(transFormedStream)
// .pipe(writeStream);

