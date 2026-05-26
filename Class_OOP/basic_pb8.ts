// 1. Define the two unique interfaces
interface User {
  name: string;
  email: string;
}

interface SlackChannel {
  channelName: string;
  webhookUrl: string;
}

// 2. Combine them into a union type
type NotificationRecipient = User | SlackChannel;

// 3. Use the 'in' operator to safely narrow the types
function sendNotification(recipient: NotificationRecipient, message: string): string {
  
  // We check if the 'email' property exists IN the recipient object
  if ("email" in recipient) {
    // TypeScript now knows 100% that 'recipient' is a User object.
    // It safely allows '.email' and autocomplete works!
    return `Email sent to ${recipient.email}: "${message}"`;
  }
  
  // If it's not a User, TypeScript automatically narrows it down to SlackChannel
  return `Slack message sent to channel #${recipient.channelName}: "${message}"`;
}

// 4. Test cases
const userRecipient: User = { name: "Alice", email: "alice@dev.com" };
const slackRecipient: SlackChannel = { channelName: "alerts", webhookUrl: "https://hooks.slack.com/..." };

console.log(sendNotification(userRecipient, "Server is down!"));
// Output: Email sent to alice@dev.com: "Server is down!"

console.log(sendNotification(slackRecipient, "Server is down!"));
// Output: Slack message sent to channel #alerts: "Server is down!"