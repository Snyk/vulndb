## Overview
[`org.springframework.webflow:spring-webflow`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-webflow%22) facilitates building web applications that require guided navigation.

Affected versions of this package are vulnerable to Data Binding Expression Vulnerability due to setting the default value of the `MvcViewFactoryCreator useSpringBinding` property to `false`. If the application does not have a sub-element to declare explicit data binding property mappings, it can be vulnerable to malicious EL expressions in view states that process form submissions.

For more information on Insecure Defaults, go to our [blog](https://snyk.io/blog/mongodb-hack-and-secure-defaults/).

## References
- [Pivotal Security Advisory](https://pivotal.io/security/cve-2017-4971)
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-4971)
- [GitHub Commit](https://github.com/spring-projects/spring-webflow/commit/57f2ccb66946943fbf3b3f2165eac1c8eb6b1523)
- [Jira Issue](https://jira.spring.io/browse/SWF-1700)
