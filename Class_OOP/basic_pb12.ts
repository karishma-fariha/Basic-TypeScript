// 1. Use 'as const' to make the array and its contents completely immutable
const SYSTEM_ADMINS = ["root", "superuser", "admin_main"] as const;

// 2. Type the parameter as a 'readonly' array to prevent mutation methods
function addSystemAdmin(adminsList: readonly string[], newAdmin: string): string[] {
  // ❌ TypeScript catches the mutation attempt immediately!
  // adminsList.push(newAdmin); 
  // Error: Property 'push' does not exist on type 'readonly string[]'.

  // 3. Fix the code to return a safe, new array using the spread operator
  return [...adminsList, newAdmin];
}

// 4. Test cases
const updatedAdmins = addSystemAdmin(SYSTEM_ADMINS, "new_moderator");

console.log(updatedAdmins); // Output: ["root", "superuser", "admin_main", "new_moderator"]
console.log(SYSTEM_ADMINS);  // Output: ["root", "superuser", "admin_main"] (Untouched!)