## Overview

semver is vulnerable to regular expression denial of service ([ReDoS](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)) when extremely long version strings are parsed.

_Source: [Node Security Project](https://nodesecurity.io/advisories/31)_

## Details
"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1]

## Remediation
Update to a version 4.3.2 or greater. Package version can no longer be more than 256 characters long. This prevents a situation in which parsing the version number can use exponentially more time and memory to parse, leading to a potential denial of service.

## References
- https://nodesecurity.io/advisories/31
- [1] https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
- https://github.com/npm/npm/releases/tag/v2.7.5
