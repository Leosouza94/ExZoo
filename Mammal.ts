import { Animal } from "./Animal";

export class Mammal extends Animal {
    private coat:string

    constructor (name:string,age:number,coat:string){
        super(name,age)
        this.coat = coat
    }

    getCoat():string{
        return this.coat
    }

    setCoat(coat:string):void{
        this.coat = coat
    }
    
    breastFeed():void{
        console.log(`${this.getName()} is breastfeeding.`)
    }

}

