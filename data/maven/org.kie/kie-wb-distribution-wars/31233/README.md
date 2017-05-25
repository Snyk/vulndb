## Overview
[`org.kie:kie-wb-distribution-wars`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22kie-wb-distribution-wars%22)
Affected versions of the package are vulnerable to Improper Privileges.  After logging in as one user into workbench and opening dashbuilder, the same user is also logged in. However, after logging out and logging in as another user, the same user from previous login is logged in into the dashbuilder application.

## References
- [Github Commit](https://github.com/kiegroup/kie-wb-distributions/commit/5d5db2b0da1a69b9dff72227b647bcf4b7902d45)
- [Jira Issue](https://issues.jboss.org/browse/JBPM-5378)
