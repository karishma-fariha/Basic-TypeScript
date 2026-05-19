// 1. Define the interface for the User object
interface User {
  name: string;
  age: number;
  hasReservation: boolean;
}

// 2. Add types to the parameter and the function's return value
function checkAccess(user: User): string {
  if (user.age >= 21 && user.hasReservation) {
    return `Welcome aboard, ${user.name}!`;
  }
  return "Sorry, you can't come in tonight.";
}

// 3. Test cases (TypeScript now knows exactly what these are)
const guest1: User = { name: "Alice", age: 25, hasReservation: true };
const guest2: User = { name: "Bob", age: 19, hasReservation: true }; 

console.log(checkAccess(guest1)); // Output: Welcome aboard, Alice!
console.log(checkAccess(guest2)); // Output: Sorry, you can't come in tonight.