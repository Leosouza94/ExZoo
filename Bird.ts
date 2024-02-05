import { Animal } from "./Animal";

export class Bird extends Animal {
    private wingspan:number

    constructor (name:string,age:number,wingspan:number){
        super(name,age)
        this.wingspan = wingspan
    }

    getWingspan():number{
        return this.wingspan
    }

    fly():void{
        console.log(`${this.getName()} is flying.`)
    }

}

