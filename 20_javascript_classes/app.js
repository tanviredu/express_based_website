class Car{
    constructor(doors,engine,color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStatus(){
        return `This Car has ${this.color} color a ${this.engine} engine and ${this.doors} doors`;
    }
}

const cx5 = new Car(4,'v6','black');
console.log(cx5);
console.log(cx5.carStatus());