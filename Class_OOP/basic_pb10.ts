// 1. Define the allowed keys
type SupportedFeatures = "darkMode" | "betaFeatures" | "aiChatbot" | "premiumCheckouts";

// 2. Use Record to map those keys to boolean values
type AppConfig = Record<SupportedFeatures, boolean>;

// 3. Apply the types to the function
function isFeatureEnabled(config: AppConfig, featureName: SupportedFeatures): boolean {
  // TypeScript knows 'featureName' is guaranteed to be a valid key of 'config'
  return config[featureName];
}

// 4. Test cases
const currentConfig: AppConfig = {
  darkMode: true,
  betaFeatures: false,
  aiChatbot: true,
  premiumCheckouts: false
};

// This works perfectly
console.log(isFeatureEnabled(currentConfig, "aiChatbot")); // Output: true

// ❌ TypeScript catches the invalid feature name instantly!
// console.log(isFeatureEnabled(currentConfig, "bitcoinMining")); 
// Error: Argument of type '"bitcoinMining"' is not assignable to parameter of type 'SupportedFeatures'.

// ❌ TypeScript also forces the config object to be complete and valid:
// const brokenConfig: AppConfig = { darkMode: true }; 
// Error: Property 'betaFeatures' is missing in type...