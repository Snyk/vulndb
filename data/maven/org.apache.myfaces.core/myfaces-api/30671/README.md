## Overview
[`org.apache.myfaces.core:myfaces-api`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22myfaces-api%22)
Affected versions of the package are vulnerable to Information Exposure. If a submit outcome includes both `faces-redirect=true` and `includeViewParams=true` (or `faces-include-view-params=true` alias) it is possible to inject EL expressions directly into input fields mapped as view parameters.

## References
- [Apache Security Advisory](https://issues.apache.org/jira/browse/MYFACES-3405)
- [Mail-archives](http://mail-archives.apache.org/mod_mbox/www-announce/201112.mbox/%3C4EDCD709.8050605@apache.org%3E)
