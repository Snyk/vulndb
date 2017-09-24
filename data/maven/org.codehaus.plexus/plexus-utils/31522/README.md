## Overview
[`Codehaus Plexus`](https://codehaus-plexus.github.io/) is a collection of components used by Apache Maven.

Affected versions of this package are vulnerable to Shell Command Injection. The Commandline class in plexus-utils does not correctly quote the contents of double-quoted strings.

## Remediation
Upgrade _Codehaus Plexus_ to version `3.0.16` or higher.

## References
- [Github Commit](https://github.com/codehaus-plexus/plexus-utils/commit/b38a1b3a4352303e4312b2bb601a0d7ec6e28f41)
- [PLXUTILS-161 - Raw Jira Ticket JSON](https://raw.githubusercontent.com/sonatype/plexus-utils/master/jira/PLXUTILS-161.json)