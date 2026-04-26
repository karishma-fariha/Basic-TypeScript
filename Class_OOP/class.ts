// class Animal{
//     name: string;
//     species:string;
//     sound:string;


//     constructor(name:string, species:string , sound:string){
//         this.name = name
//         this.species= species
//         this.sound= sound
//     }
//     makeSound(){
//         console.log(`${this.name} is making sound:${this.sound}`)
//     }
// }



// parameter properties


class Animal {
    constructor(public name: string, public species: string, public sound: string) {
    }
    makeSound() {
        console.log(`${this.name} is making sound:${this.sound}`)
    }
}

// const cat=new Animal("cat bhai","cat","maw maw")
const dog = new Animal("dogesh bhai", "dog", "ghew ghew");
dog.makeSound();
console.log(dog.name)