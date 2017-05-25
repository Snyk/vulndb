## Overview
[`org.hibernate:hibernate-validator`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22hibernate-validator%22)
ReflectionHelper (org.hibernate.validator.util.ReflectionHelper) in Hibernate Validator 4.1.0 before 4.2.1, 4.3.x before 4.3.2, and 5.x before 5.1.2 allows attackers to bypass Java Security Manager (JSM) restrictions and execute restricted reflection calls via a crafted application.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-3558)
- [Jira Issue](https://hibernate.atlassian.net/browse/HV-912)
