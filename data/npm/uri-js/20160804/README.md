## Overview
[`uri-js`](https://www.npmjs.com/package/uri-js) is an RFC 3986/3987 compliant, scheme extendable URI/IRI parsing/validating/resolving library for JavaScript.

Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) attacks when validating URLs.

## Remediation
Upgrade `uri-js` to version 3.0.0 or higher.

## References
- https://github.com/garycourt/uri-js/issues/12
- https://github.com/garycourt/uri-js/pull/17
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
