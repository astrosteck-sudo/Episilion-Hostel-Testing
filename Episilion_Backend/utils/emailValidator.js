const dns = require("dns");

/**
 * Basic syntax check using regex
 */
function isValidSyntax(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Full backend email validation
 * @param {string} email - Email to validate
 * @param {boolean} checkDomain - Whether to check MX records
 * @returns {Promise<boolean>}
 */
async function validateEmail(email, checkDomain = true) {
  if (!email) return false;

  const normalized = email.trim().toLowerCase();
  if (!isValidSyntax(normalized)) return false;

  if (checkDomain) {
    const domain = normalized.split("@")[1];
    try {
      const records = await dns.promises.resolveMx(domain);
      return records && records.length > 0;
    } catch {
      return false;
    }
  }

  return true;
}

module.exports = { validateEmail };
