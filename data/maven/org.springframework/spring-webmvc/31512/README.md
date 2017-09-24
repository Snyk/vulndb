## Overview
Affected versions of [`org.springframework:spring-webmvc`](https://springframework.org)  are vulnerable to Cross-site Scripting (XSS) attacks. The `LocaleChangeInterceptor` does not escape user input values from an HTTP request.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave).

## Remediation
Upgrade `org.springframework:spring-webmvc` to version 3.0.6 or higher.

## References
- [Jira Issue](https://jira.spring.io/browse/SPR-7779)
- [Release Notes](https://docs.spring.io/spring/docs/3.0.6.RELEASE/changelog.txt)
