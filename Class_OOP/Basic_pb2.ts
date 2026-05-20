// 1. Define the Order interface with union types and an optional property
interface Order {
  id: number;
  status: "processing" | "shipped" | "delivered"; // Union Type
  estimatedDays?: number;                        // Optional Property
}

// 2. Apply the types to the function
function getDeliveryEstimate(order: Order): string {
  if (order.status === "delivered") {
    return `Delivered!`;
  }
  
  if (order.status === "shipped") {
    // TypeScript allows this because it knows status is exactly "shipped" here
    return `In transit. Estimated delivery: ${order.estimatedDays} days.`;
  }
  
  return "Order is still processing.";
}

// 3. Test cases
const order1: Order = { id: 101, status: "shipped", estimatedDays: 3 }; // Works perfectly
const order2: Order = { id: 102, status: "processing" };               // Works perfectly (estimatedDays is omitted)

// const order3: Order = { id: 103, status: "mistake_typo" }; 
// ❌ ERROR: Type '"mistake_typo"' is not assignable to type '"processing" | "shipped" | "delivered"'.