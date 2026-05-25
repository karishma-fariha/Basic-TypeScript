// 1. Define the base, strict interface
interface UserProfile {
  username: string;
  email: string;
  bio: string;
}

// 2. Use Partial<UserProfile> to make an optional version automatically
function updateProfile(
  currentProfile: UserProfile, 
  updates: Partial<UserProfile> // Hover over this in your editor to see the magic!
): UserProfile {
  return { ...currentProfile, ...updates };
}

// 3. Test cases
const existingUser: UserProfile = {
  username: "dev_dan",
  email: "dan@code.com",
  bio: "Just a developer."
};

// This works perfectly even though username and email are missing!
const formUpdates: Partial<UserProfile> = {
  bio: "Senior TypeScript Developer ✨"
};

const newUser = updateProfile(existingUser, formUpdates);
console.log(newUser); 
// Output: { username: 'dev_dan', email: 'dan@code.com', bio: 'Senior TypeScript Developer ✨' }

// ❌ TypeScript will still block typos or invalid properties:
// const badUpdates: Partial<UserProfile> = { website: "dan.dev" }; 
// Error: Object literal may only specify known properties, and 'website' does not exist...