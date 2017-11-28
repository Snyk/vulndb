## Overview
[`org.springframework.data:spring-data-rest-webmvc`](https://data.springframework.org) the goal of the project is to provide a flexible and configurable mechanism for writing simple services that can be exposed over HTTP.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
Malicious PATCH requests submitted to `spring-data-rest` servers can use specially crafted JSON data to run arbitrary Java code.

## Remediation
Upgrade `org.springframework.data:spring-data-rest-webmvc` to version 3.0.0RC3 or higher.

## References
- [Pivotal Security](https://pivotal.io/security/cve-2017-8046)
- [Spring Jira Issue](https://jira.spring.io/browse/DATAREST-1127)
- [Github Commit](https://github.com/spring-projects/spring-data-rest/commit/824e51a1304bbc8334ac0b96ffaef588177e6ccd)
