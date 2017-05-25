## Overview
[`org.springframework.data:spring-data-jpa`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-data-jpa%22)
SQL injection vulnerability in Pivotal Spring Data JPA before 1.9.6 (Gosling SR6) and 1.10.x before 1.10.4 (Hopper SR4), when used with a repository that defines a String query using the @Query annotation, allows attackers to execute arbitrary JPQL commands via a sort instance with a function call.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6652)