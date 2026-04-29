class student{
    name:string;
    age: number;
    address: string;
    constructor(name: string, age: number,address: string){
           this.name=name;
           this.age= age;
           this.address=address;
    }
    getSleep(numOfHr:number){
        console.log(`${this.name} eni ${numOfHr} hr ghumai`)
    }

}

const student1 =new student(`arafin`,24,"dhaka");
student1.getSleep(4)