function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("started downloading from ",url);
        setTimeout(function(){
            let data="Dummy data";
            resolve(data);
            console.log("Download completed");
        },7000)
    })
}
console.log("start");
let PromiseObj=fetchData("sagarrayhhs");
PromiseObj.then(function A(value){
    console.log("value is ",value)
})

console.log("END");

// .then 
// first function for fullfill array
// second function for reject array

/*--------output-------*/
// start
// started downloading from  sagarrayhhs 
// END
// Download completed
// value is  Dummy data