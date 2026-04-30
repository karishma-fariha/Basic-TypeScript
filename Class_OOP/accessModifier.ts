class BankAccount{
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

class StudentBankAccount extends BankAccount{
test(){
    this.userName;
}
}
const karuAccount = new BankAccount(123,"karu",2000);
karuAccount.addBalance(100)
console.log(karuAccount);
