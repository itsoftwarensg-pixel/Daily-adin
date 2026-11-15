# Project preferences

- Preserve replaced code as inactive comments near the change. For a full component rewrite, keep the previous implementation as line comments at the end of the file. Avoid duplicating unrelated code.
- Prioritize frontend performance: reuse timers, avoid unnecessary network requests and renders, and serve appropriately sized images. Measure or verify improvements; do not promise constant speed.
- Keep existing backend/API contracts and admin publishing behavior unless the user requests changes.
