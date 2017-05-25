## Overview
[`keystone`](https://www.npmjs.com/package/keystone) is a Web Application Framework and Admin GUI / Content Management System built on Express.js and Mongoose.
Affected versions of the package are vulnerable to  Open redirection which occurs when a vulnerable web page is redirected to an untrusted and malicious page that may compromise the user.  Open redirection attacks usually come with a phishing attack because the modified vulnerable link is identical to the original site, which increases the likelihood of success for the phishing attack.

## Remediation
Upgrade `keystone` to version 0.3.6 or higher.

## References
- [GitHub PR](https://github.com/keystonejs/keystone/pull/242)
- [GitHub Commit](https://github.com/keystonejs/keystone/commit/d06a688e36bfb95c88336659fee9be10416ce46b)
