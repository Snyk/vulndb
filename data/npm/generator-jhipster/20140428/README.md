## Overview
[`generator-jhipster`](https://www.npmjs.com/package/generator-jhipster) is a Spring Boot + Angular in one handy generator.
Affected versions of the package are vulnerable due to the mishandling if the logout function in IE8. When an admin logs out, the session is not properly cleared and any user logging in afterward will have admin permissions. A malicious user could use this to their advantage.

**Note:** This only occurs on IE8.

## Remediation
Upgrade `generator-jhipster` to version 0.14.0 or higher.

## References
- [GitHub Issue #1](https://github.com/jhipster/generator-jhipster/issues/540)
- [GitHub Issue #2](https://github.com/jhipster/generator-jhipster/issues/265)
- [GitHub Commit](https://github.com/jhipster/generator-jhipster/commit/9e14c6a890f9801ea413b989f16698d240c6390c)
