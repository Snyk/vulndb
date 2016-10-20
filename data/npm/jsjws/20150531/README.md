## Overview
The `jsjws` is a pure JavaScript implementation of JSON Web Signature. JSON Web Tokens are an open, industry standard method for representing claims securely between two parties.

Affected versions of this module treated tokens signed with the `none` algorithm as a valid token with a verified signature and resulted in giving attackers arbitrary account access.

## Remediation
Upgrade `jsjws` to version 2.0.1 or higher.

## References
- https://github.com/kjur/jsjws/issues/25
- https://github.com/kjur/jsjws/releases/tag/3.2.0
- https://www.chosenplaintext.ca/2015/03/31/jwt-algorithm-confusion.html
- https://jwt.io/
