class Product{
    // name;
    // discription;
    // price;

    /* there is nothing like constructor overloading
       in javascript */
    constructor(a,b,c){
        this.name=a;
        this.discription=b;
        this.price=c;

        // return "10"; //  primitive -> no effect
        // return {};  //  you can return object 
        // return this; // if you dont return anything , it is equal to return this
    }

    display(){

    }
}

const p = new Product("sagar","this is enge",10);
console.log(p);