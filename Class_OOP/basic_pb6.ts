// 1. Define the UserRole Enum
enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  GUEST = "GUEST"
}

// 2. Define the User interface using the Enum
interface User {
  name: string;
  role: UserRole; // This field must be a value from the UserRole enum
}

// 3. Update the function to use the Enum values
function getPermissions(user: User): string {
  if (user.role === UserRole.ADMIN) {
    return "You have full read, write, and delete access.";
  }
  if (user.role === UserRole.EDITOR) {
    return "You can read and edit content.";
  }
  if (user.role === UserRole.GUEST) {
    return "You can only read content.";
  }
  return "Unknown role.";
}

// 4. Test cases using the Enum
const worker1: User = { name: "Sarah", role: UserRole.ADMIN };

// TypeScript will catch the typo immediately if you try to use a raw string like "guest"
const worker2: User = { name: "Alex", role: UserRole.GUEST }; 

console.log(getPermissions(worker1)); // Output: You have full read, write, and delete access.
console.log(getPermissions(worker2)); // Output: You can only read content.