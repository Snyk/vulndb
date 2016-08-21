## Overview
['node-krb5'](https://www.npmjs.com/package/node-krb5) is a node.js native add-on for simple krb5 user authentication.

Current implementation does not verify the Kerberos Key Distribution Center (KDC): it accepts a username/password from the user, then asks a KDC whether that password is correct for the corresponding Kerberos principal - without assurance that the response came from a real KDC.

## Remediation
There's no official fix for the vulnerability. In the meanwhile, consider switching to a ['different npm module'](https://www.npmjs.com/package/kerberos).

## References
- https://github.com/qesuto/node-krb5/issues/13
- http://archive.hack.lu/2010/Bouillon-Stealing-credentials-for-impersonation.pdf

