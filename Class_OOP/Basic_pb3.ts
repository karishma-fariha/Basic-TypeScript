// 1. Define the blueprint for a single item in the cart
interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

// 2. Define the exact valid discount codes using a union type
type DiscountCode = "SAVE10" | "WELCOME5";

// 3. Apply types to the function parameters and return type
function calculateTotal(cart: CartItem[], discountCode?: DiscountCode): number {
  let total = 0;
  
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  
  // TypeScript safely allows us to check the value because it's tightly controlled
  if (discountCode === "SAVE10") {
    total = total * 0.9;
  } else if (discountCode === "WELCOME5") {
    total = total * 0.95;
  }
  
  return total;
}

// 4. Test cases
const item1: CartItem = { name: "Wireless Mouse", price: 25, quantity: 2 };
const item2: CartItem = { name: "Mechanical Keyboard", price: 80, quantity: 1 };

const myCart: CartItem[] = [item1, item2];

// Test case 1: With a valid discount code
console.log(calculateTotal(myCart, "SAVE10")); // Output: 117

// Test case 2: Without any discount code (Perfectly valid now!)
console.log(calculateTotal(myCart)); // Output: 130

// Test case 3: Triggers an automatic compile error
// console.log(calculateTotal(myCart, "FAKECODE")); 
// ❌ ERROR: Argument of type '"FAKECODE"' is not assignable to parameter of type 'DiscountCode'.