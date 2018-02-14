## Overview
[`org.springframework.webflow:spring-webflow`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-webflow%22) facilitates building web applications that require guided navigation.

Affected versions of this package are vulnerable to Insecure defaults due to an incomplete fix for [CVE-2017-4971](https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORKWEBFLOW-31452).

An issue was discovered in Pivotal Spring Web Flow through 2.4.5. Applications that do not change the value of the `MvcViewFactoryCreator` `useSpringBinding` property which is disabled by default (i.e., set to 'false') can be vulnerable to malicious EL expressions in view states that process form submissions but do not have a sub-element to declare explicit data binding property mappings.

For more information on Insecure Defaults, go to our [blog](https://snyk.io/blog/mongodb-hack-and-secure-defaults/).

## References
- [Pivotal Security Advisory](https://pivotal.io/security/cve-2017-8039)
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-8039)
- [GitHub Commit](https://github.com/spring-projects/spring-webflow/commit/57f2ccb66946943fbf3b3f2165eac1c8eb6b1523)
