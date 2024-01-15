class Product{
    #name; //# -> way to make properity private
    constructor(name,price,discription){
        this.#name=name;
        this.price=price;
        this.discription=discription;
    }

    //setter
    set name(name)
    {
        if(typeof(name)!=='string')
        return ;

        this.#name=name;
    }

    //getter
    get name(){
        return this.#name;
    }

    display(){
        console.log(this);
    }
}

let p=new Product("sagar",10,"iphone");
// p.name='-1'; // this we add new name properity in product class instance , but this is not same as private name
console.log(p);
p.display();

console.log(p.name);