## Overview
[`ghost`](https://www.npmjs.com/package/ghost) is a blogging platform.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks. An authenticated user can embed code in the blog's images, like the user avatar, cover image and blog image, with possible malicious intent to execute the code on the client-side.
Additionally, another Cross-site Scripting (XSS) has been found in the Tag Manager. An authenticated user can create a new post and tag it with a tag containing javascript code. An administrator may want to delete this tag, triggering the javascript code. This will result in the administrator token is stolen and his session hijacked.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `ghost` to version 0.5.9 or higher.

## References
- [Voidsec-Ghost Vulnerability Report](https://voidsec.com/ghost-blogging-platform/)
- [Penetration Test Report](https://voidsec.com/wp-content/uploads/2015/03/VoidSec-Ghost.pdf)
- [Ghost ChangeLog](https://dev.ghost.org/ghost-0-5-9/)
