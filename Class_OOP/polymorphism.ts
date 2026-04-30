class Person1 {
    getSleep() {
        console.log(`i am a normal people.i sleep for 10 hr`)
    }
}
class Student1 extends Person1{
getSleep() {
    console.log(`i am a student.i sleep for 8 hr`);

}
}
class NextLevelDev extends Person1{
    getSleep() {
        console.log(`i am next level dev.i sleep for 6hr`)
    }
}
const getSleepingHr=(param:Person1)=>{
param.getSleep();
}

const person1= new Person1()
const person2 = new Student1()
const person3 = new NextLevelDev()
getSleepingHr(person1)
getSleepingHr(person2)