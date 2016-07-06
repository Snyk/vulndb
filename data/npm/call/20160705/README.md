## Overview
[`call`](https://www.npmjs.com/package/call) is the primary HTTP router of the [`hapi`](https://www.npmjs.com/package/hapi) framework.

The vulnerability arise from `undefined` values inside a path (last segment being an exception) making their way into components that do not care for values being `undefined` (eg. the database layer).

For example, the request URI `/delete/company//` may incorrectly match a route looking for `/delete/company/{company}/`. By itself, the bad match is not a vulnerability. However, depending on the remaining logic in the application, such a bad match may result in skipping a protection mechanisms. In the above example, if the route translates to a DB delete command, it might delete all the companies from the db.

## Remediation
Upgrade to version 3.0.2 or higher. 

## References
https://github.com/hapijs/hapi/issues/3228
https://github.com/hapijs/call/commit/9570eee5358b4383715cc6a13cb95971678efd30
