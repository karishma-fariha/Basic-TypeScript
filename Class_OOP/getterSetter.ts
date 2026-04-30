// getter
// setter
class BankAccountNew {
    readonly userId: number;
    protected userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    // balance set
    // addBalance(balance: number) {
    //     this.userBalance = this.userBalance + balance;
    // }

    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    }
    // get balance
    // getBalance() {
    //     return this.userBalance;
    // }

    get getBalance(){
       return this.userBalance;
    }
}

class StudentBankAccountNew extends BankAccountNew {
    test() {
        this.userName;
    }
}
const karuAccount1 = new BankAccountNew(123, "karu", 2000);
karuAccount1.addBalance=100
console.log(karuAccount1.getBalance);
