## Overview
The semver module uses regular expressions when parsing a version string. For a carefully crafted input, the time it takes to process these regular expressions is not linear to the length of the input. Since the semver module did not enforce a limit on the version string length, an attacker could provide a long string that would take up a large amount of resources, potentially taking a server down. This issue therefore enables a potential Denial of Service attack. This is a slightly differnt variant of a typical Regular Expression Denial of Service ([ReDoS](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)) vulnerability.

## Remediation
Update to a version 4.3.2 or greater. From the issue description [2]: "Package version can no longer be more than 256 characters long. This prevents a situation in which parsing the version number can use exponentially more time and memory to parse, leading to a potential denial of service."

## References

- [1] https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
- [2] https://github.com/npm/npm/releases/tag/v2.7.5
