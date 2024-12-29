# Unhandled Database Errors in Express.js

This repository demonstrates a common error in Express.js applications: unhandled database errors causing server crashes.  The provided `bug.js` file shows the flawed code, while `bugSolution.js` presents a corrected version with proper error handling.

## Bug Description
The `/users/:id` route attempts to fetch user data from a database.  However, it lacks robust error handling. If the database query fails (e.g., network issue, database unavailable), the server crashes without providing a meaningful response to the client.

## Solution
The solution (`bugSolution.js`) incorporates `try...catch` blocks to gracefully handle database errors.  It sends an appropriate error response to the client if an error occurs during the database operation, preventing the server from crashing.