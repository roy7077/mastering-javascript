//Tasks: (use promise only)
//1. write  a function to download data from a url
//2. write a function to save that downloaded data in a file return the filename
//3. write a function to upload the file written in previous step to newurl
function download(url){
    console.log("Starting to download from ",url);
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Downloading completed");
            const content="ABCDEF";
            res(content);
        }, 10000);
    })
}

function writeFile(data){
    console.log("Starting writing a file with ",data);
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("completed writing the data in a file");
            const filename="file.txt";
            res(filename);
        }, 5000);
    })
}

function uploadFile(data,url){
    console.log("Started uploading ",data ,"on ",url);
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("upload completed");
            const response="SUCCESS";
            res(response);
        }, 2000);
    })
}

download("www.xyz.com")
.then((value)=>{
    console.log("downloading done with following value ",value);
    return writeFile(value);
})
.then((value)=>{
    console.log("data written in the file with name ",value);
    return uploadFile(value,"www.uploadfile.com");
})
