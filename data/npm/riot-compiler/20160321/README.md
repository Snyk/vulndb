## Overview
`riot-compiler` is a compiler for riot .tag files. Affected versions of this package are vulnerable to [Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) attacks due to an issue in a regex that makes it unusable under certain conditions.

## Recommendation
Upgrade `riot-compiler` to version 2.3.22 or greater.

## References
- https://github.com/riot/compiler/issues/46
