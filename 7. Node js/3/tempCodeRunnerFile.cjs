const fs = require('fs');
const TransformStream = require('stream').Transform;
const readstream = fs.createReadStream(__dirname+'/run.txt');

const transFormedStream = new TransformStream({
    transform(chunk,enc,cb){
         this.push(chunk.toString().toUpperCase);
        // setTimeout(cb,3000);
    }
})

const writeStream = process.stdout;
readstream
.pipe(transFormedStream)
.pipe(writeStream);