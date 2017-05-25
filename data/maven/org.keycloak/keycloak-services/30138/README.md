## Overview
[`org.keycloak:keycloak-services`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22keycloak-services%22)
It was discovered that JBoss KeyCloak's soft token removal endpoint was vulnerable to Cross-Site Request Forgery (CSRF) attacks. A remote attacker could provide a specially-crafted web page that, when visited by a user authenticated by KeyCloak, could allow the attacker to remove a soft token registerd to the user.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-3655)
