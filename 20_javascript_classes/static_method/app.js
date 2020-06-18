class Car{
    constructor(doors,engine,color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStatus(){
        return `This Car has ${this.color} color a ${this.engine} engine and ${this.doors} doors`;
    }


    static totaldoors(cr1,cr2){
        const doors1 = cr1.doors;
        const doors2 = cr2.doors;
        return doors1+doors2;
    }
}

const cx5 = new Car(4,'v6','black');
const cx6 = new Car(5,'v7','red');
console.log(cx5);
console.log(cx5.carStatus());

var doors = Car.totaldoors(cx5,cx6);
console.log(doors)
console.log(cx5.doors.toString());