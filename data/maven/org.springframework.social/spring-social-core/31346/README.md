## Overview
[`org.springframework.social:spring-social-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-social-core%22)
It was found that when authorizing an application against an OAuth 2 API provider, Spring Social is vulnerable to a Cross-Site Request Forgery (CSRF) attack. The attack involves a malicious user beginning an OAuth 2 authorization flow using a fake account with an OAuth 2 API provider, but completing it by tricking the victim into visiting the callback request in their browser. As a consequence, the attacker will have access to the victim's account on the vulnerable site by way of the fake provider account.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1305443)
