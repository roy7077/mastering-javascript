// (i)  The const declaration declares block-scoped local variables. 
// (ii) The value of a constant can't be changed through reassignment using the assignment operator, 
        /*
        const a=10;
        a=20; ❌ Not allowed
        */

// (iii) but if a constant is an object, its properties can be added, updated, or removed.
        /*
        const obj={
            name:"sagar",
            age: "20",
        };

        obj.city="chandigarh"; ✅ allowed , can change the properties
        obj={ };               ❌ Not allowed
        */
// rest thing are same a let 