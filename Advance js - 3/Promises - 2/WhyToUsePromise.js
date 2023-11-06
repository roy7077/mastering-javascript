/*-----------------CallBack---------------*/
function Download(url,cb){
    console.log("Started downloading from url ",url);
    setTimeout(()=>{
        console.log("Completed downloading after 5s");
        const content="ABCDEF";
        cb(content);
    },5000);
};

Download("www.xyz.com",(data)=>{
    console.log("downloaded data is ",data);
});

//output
// Started downloading from url  www.xyz.com
// Completed downloading after 5s
// downloaded data is  ABCDEF

/*
  we are passing callback to the function ,
  we are not call that function, we are not 
  controling that function ,
  so to avoid this thing we use promises
*/


/*------------------Promise-----------------*/
function download(url){
    console.log("started donwloading content from ",url);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Completed downloading data in 5s");
            const content="ABCDEF";
            resolve(content);
        }, 5000);
    })
}

let x=download("www.xyz.com");
x.then((value)=>{
    console.log("Content download is ",value);
})

//output
// started donwloading content from  www.xyz.com
// Completed downloading data in 5s
// Content download is  ABCDEF

/* we have control over promise */