## Overview
[`org.mule.modules:mule-module-xml`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22mule-module-xml%22)
Affected versions of the package are vulnerable to XML External Entity (XXE) Injection. JXPathExpressionEvaluator includes XMLUtils.toW3cDocument that does not disable external entities.

## References
- [Jira Issue](https://www.mulesoft.org/jira/browse/MULE-8083)
