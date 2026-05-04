function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;

  // 1. Trim to remove accidental leading/trailing spaces
  const cleanEmail = email.trim();

  // 2. A more standard regex that checks:
  // - local-part: Alphanumeric and common specials (+, _, ., -)
  // - domain: Alphanumeric and hyphens
  // - TLD: At least 2 characters (e.g., .co, .com)
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(cleanEmail);
}

export default isValidEmail;