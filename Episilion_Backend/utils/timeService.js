// utils/timeService.js
const ntpClient = require("ntp-client");

let cachedTime = null;
let lastFetch = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getTrustedTime = () => {
  return new Promise((resolve, reject) => {
    const now = Date.now();

    // Use cached time if still fresh
    if (cachedTime && (now - lastFetch) < CACHE_DURATION) {
      return resolve(cachedTime);
    }

    // Fetch from NTP
    ntpClient.getNetworkTime("pool.ntp.org", 123, (err, date) => {
      if (err) {
        console.error("NTP fetch failed:", err);

        // Fallback: use local system time
        return resolve(Math.floor(now / 1000));
      }

      cachedTime = Math.floor(date.getTime() / 1000); // seconds
      lastFetch = now;
      resolve(cachedTime);
    });
  });
};

module.exports = { getTrustedTime };
