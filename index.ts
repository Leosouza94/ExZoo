import { Animal } from "./Animal";
import { Mammal } from "./Mammal";
import { Bird } from "./Bird";

const mammal = new Mammal("Elephant",10,"Gray")
const bird = new Bird("Eagle",5,2.5)

console.log(`Name: ${mammal.getName()}, Age: ${mammal.getAge()}, Coat: ${mammal.getCoat()}`)
mammal.emitSound()
mammal.breastFeed()
console.log(' ')
mammal.setName("Leopard")
mammal.setAge(5)
mammal.setCoat('Yellow')
console.log(`Name: ${mammal.getName()}, Age: ${mammal.getAge()}, Coat: ${mammal.getCoat()}`)


