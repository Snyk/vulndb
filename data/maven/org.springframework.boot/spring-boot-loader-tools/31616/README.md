## Overview
Affected versions of [`org.springframework.boot:spring-boot-loader-tools`](https://boot.springframework.org) are vulnerable to Symlink privilege escalation.

Spring Boot supports an embedded launch script that can be used to easily run the application as a systemd or init.d linux service. The script included with Spring Boot 1.5.9 and earlier is susceptible to a symlink attack which allows the “run_user” to overwrite and take ownership of any file on the same system.

**Note:** In order to instigate the attack, the application must be installed as a service and the “run_user” requires shell access to the server.

## Remediation
Upgrade `org.springframework.boot:spring-boot-loader-tools` to version 1.5.10 or 2.0.0.RC1.

## References
- [GitHub PR](https://pivotal.io/security/cve-2018-1196)
- [GitHub Issue](https://github.com/spring-projects/spring-boot/issues/11397)
- [GitHub Commit](https://github.com/spring-projects/spring-boot/commit/9b8cb9a4639af3b47b5eeec4f5a04261dcd2a058)
