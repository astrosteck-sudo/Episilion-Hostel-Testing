// Import the Zod library for schema validation
const { z } = require("zod");

// Define a schema for the "favorite" request parameters
const favoriteParamsSchema = z.object({
  // hostelId must be a string and a valid UUID format
  // If it's not a valid UUID, Zod will throw an error with the message "Invalid hostel ID"
  hostelId: z.string().uuid("Invalid hostel ID"),
});

// Export the schema so it can be used in other files (e.g., controllers, routes)
module.exports = {
  favoriteParamsSchema,
};
