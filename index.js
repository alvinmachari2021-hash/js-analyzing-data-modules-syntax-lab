// index.js
// Author: Alvin Macharia Ndichu
// Lab: Analyzing Data with Modules and Syntax (JS)

/**
 * combineUsers
 * Accepts any number of arrays of usernames and returns an object
 * with the merge date and merged users.
 * @param  {...string[]} usernameArrays
 * @returns {{ merge_date: string, users: string[] }}
 */
function combineUsers(...usernameArrays) {
  // Validate inputs
  for (const arr of usernameArrays) {
    if (!Array.isArray(arr)) {
      throw new TypeError("All inputs must be arrays of usernames.");
    }
  }

  // Merge arrays using spread operator
  const users = [].concat(...usernameArrays);

  // Format date as M/d/yyyy
  const now = new Date();
  const month = now.getMonth() + 1; // months are 0-based
  const day = now.getDate();
  const year = now.getFullYear();
  const merge_date = `${month}/${day}/${year}`;

  // Return object with correct property names
  return { merge_date, users };
}

// Export function for testing
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};