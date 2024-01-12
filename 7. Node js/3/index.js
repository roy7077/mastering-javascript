import { read, writeFile } from 'fs';
import {readFile} from 'fs/promises';

//console.log(import.meta.url); //print the current path

const filepath= new URL('./index.html',import.meta.url);
/* in filepath ->
   1st parameter is the path of the file from where content is to read
   2nd parameter is is the current directory path (import.meta.url  is current directory path)
*/
let contents = await readFile(filepath,{encoding:'utf-8'});
//console.log(contents);

let data={
    name:"sagar",
    age:"20",
    company:"google"
};

for( const [key,value] of Object.entries(data))
{
    contents = contents.replace(`{${key}}`,value);
};

//console.log(contents);
//writeFile(new URL('./newindex.html',import.meta.url), contents);
/*
console.log(Object.entries(data)); // keys and values in aaray [1st,2nd] -> 1st - key , 2nd - value
console.log(Object.keys(data));   // prints keys of data object
console.log(Object.values(data)); //prints values of data object
*/

/* for of loop
const array=['sagar','ray','sonu','mummy','papa'];
for(const it of array)
{
    console.log(it);
}
*/