//Tasks: (don't use promise only use callbacks)
//1. write  a function to download data from a url
//2. write a function to save that downloaded data in a file return the filename
//3. write a function to upload the file written in previous step to newurl

function download(url,cb){
    console.log("Starting to download from ",url);
    setTimeout(() => {
        console.log("Downloading completed");
        const content="ABCDEF";
        cb(content);
    }, 10000);
}

function writeFile(data,cb){
    //write a given data into a new file
    console.log("Starting writing a file with ",data);
    setTimeout(() => {
        console.log("completed writing the data in a file");
        const filename="file.txt";
        cb(filename);
    }, 5000);
}

function upload(url,file,cb){
    //upload the data from a file to a given url
    console.log("Started uploading ",file ,"on ",url);
    setTimeout(() => {
        console.log("upload completed");
        const response="SUCCESS";
        cb(response);
    }, 2000);
}

download("www.dbz.com",(content)=>{
    console.log("We are now going to process the downloaded data");
    writeFile(content,(filename)=>{
        console.log("We have donloaded and written the file, now will upload");
        upload("www.upload.com",filename,(response)=>{
            console.log("We have uploaded with ",response);
        })
    })
})