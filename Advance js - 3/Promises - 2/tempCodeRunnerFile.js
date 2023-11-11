return new Promise((resolve,reject)=>{
        setTimeout(() => {
            string+="bar";
            resolve(string);
        }, 10000);
    })