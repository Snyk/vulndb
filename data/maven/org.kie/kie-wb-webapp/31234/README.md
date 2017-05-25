## Overview
[`org.kie:kie-wb-webapp`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22kie-wb-webapp%22)
Affected versions of the package are vulnerable to Improper Privileges. After logging in as one user into workbench and opening dashbuilder, the same user is also logged in. However, after logging out and logging in as another user, the same user from previous login is logged in into the dashbuilder application.

## References
- [Jira issue](https://issues.jboss.org/browse/JBPM-5378)
