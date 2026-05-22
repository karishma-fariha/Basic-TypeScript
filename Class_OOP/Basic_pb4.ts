// 1. Break down the nested structures into clean, reusable interfaces
interface Preferences {
  theme: "light" | "dark" | "premium-dark";
}

interface Socials {
  twitter?: string; // Optional string
  github?: string;  // Optional string
}

interface UserProfile {
  username: string;
  preferences: Preferences; // Nested required object
  socials?: Socials;        // Nested optional object
}

// 2. Apply types and use Optional Chaining (?.) to prevent crashes
function getBadgeCount(profile: UserProfile): number {
  let badges = 0;
  
  badges += 1; 
  
  if (profile.preferences.theme === "premium-dark") {
    badges += 1;
  }
  
  // Safe check using Optional Chaining (?.)
  if (profile.socials?.twitter || profile.socials?.github) {
    badges += 1;
  }
  
  return badges;
}

// 3. Test cases
const user1: UserProfile = {
  username: "coder123",
  preferences: { theme: "premium-dark" },
  socials: { twitter: "@coder123", github: "git-coder" }
};

const user2: UserProfile = {
  username: "casual_surfer",
  preferences: { theme: "light" }
  // 'socials' is safely omitted!
};

console.log(getBadgeCount(user1)); // Output: 3
console.log(getBadgeCount(user2)); // Output: 1 (No longer crashes!)