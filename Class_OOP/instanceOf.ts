// instance of type guard


class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    getSleep(numOfHr:number){
        console.log(`${this.name} doing ${numOfHr} ghumai`)
    }
}
class Student extends Person {
    constructor(name: string) {
        super(name);
    }
    doStudy(numOfHr: number) {
        console.log(`${this.name} doing ${numOfHr} study`)
    }
}
class Teacher extends Person{
    constructor(name: string){
        super(name);
    }
    takeClass(numOfHr:number){
        console.log(`${this.name} class nei ${numOfHr}`)
    }
}
const getUserInfo=(user:Person)=>{}
const student1 =new Student("mr. student");
const teacher1 = new Teacher("mr. teacher")