## Overview
[`org.jboss.resteasy:resteasy-jaxrs`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22resteasy-jaxrs%22)
DocumentProvider in RESTEasy 2.3.7 and 3.0.9 does not configure the (1) external-general-entities or (2) external-parameter-entities features, which allows remote attackers to conduct XML external entity (XXE) attacks via unspecified vectors.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-7839)
