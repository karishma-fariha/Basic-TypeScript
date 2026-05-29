// 1. Define a generic interface using <TypePlaceholder>
interface StorageBox<T> {
  timestamp: number;
  content: T; // 'T' will morph into whatever type we pass in
}

// 2. Make the function generic by placing <T> before the parentheses
function wrapInStorage<T>(data: T): StorageBox<T> {
  return {
    timestamp: Date.now(),
    content: data
  };
}

// 3. Test cases - TypeScript automatically figures out 'T'!
const stringBox = wrapInStorage("Theme: Dark Mode");
// TypeScript automatically infers stringBox as StorageBox<string>
console.log(stringBox.content.toUpperCase()); // Safe! Autocomplete works.

const numbersBox = wrapInStorage([101, 102, 103]);
// TypeScript automatically infers numbersBox as StorageBox<number[]>
numbersBox.content.push(104); // Safe! It knows this is a number array.

// ❌ TypeScript will block invalid operations because it knows the specific type:
// stringBox.content.push("Oops"); 
// Error: Property 'push' does not exist on type 'string'.