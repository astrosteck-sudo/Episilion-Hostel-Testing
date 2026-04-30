// Import the UUID library to generate unique identifiers
import { v4 as uuidv4 } from "uuid";

// Function to get or create a unique device ID
export function getDeviceId() {
  // Try to retrieve an existing device ID from localStorage
  let deviceId = localStorage.getItem("deviceId");

  // If no device ID is found, generate a new one
  if (!deviceId) {
    deviceId = uuidv4(); // Create a new UUID

    // Save the newly generated device ID in localStorage
    localStorage.setItem("deviceId", deviceId);
  }

  // Return the existing or newly created device ID
  return deviceId;
}
