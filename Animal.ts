export class Animal {
    private name:string
    private age:number

    constructor (name:string,age:number){
        this.name = name;
        this.age = age;
    }

    getName():string{  
        return this.name
    }

    getAge():number{
        return this.age
    }

    emitSound():void{
        console.log("The animal makes a sound")
    }

    setName(name:string):void{
        this.name = name
    }

    setAge(age:number):void{
        this.age = age
    }

}

