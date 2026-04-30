class BankAccount1{
 readonly userId: number;
 protected userName:string;
 private userBalance:number;
 
 constructor(userId:number,userName:string,userBalance:number){
this.userId=userId;
this.userName=userName;
this.userBalance=userBalance;
 }

 addBalance(balance:number){
    this.userBalance=this.userBalance+ balance;
 }
}

class StudentBankAccount1 extends BankAccount1{
test(){
    this.userName;
}
}
const myAccount = new BankAccount1(123,"karu",2000);
myAccount.addBalance(100)
console.log(myAccount);
