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


module.exports = Car;