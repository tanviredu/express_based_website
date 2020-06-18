const Car = require('./Car');

class SUV extends Car{
    constructor(doors,engine,color,brand){

        // calling the base constructor
        super(doors,engine,color);
        this.brand = brand;
    }

    mybrand(){
            console.log(`brand is : ${this.brand}`);
    }

}

const suv1 = new SUV(4,'g6','white','new');
const suv2 = new SUV(4,'v6','red','old');

console.log(suv1);
suv1.mybrand();
console.log(SUV.totaldoors(suv1,suv2))