## Overview
Affected versions [`org.apache.hive:hive-service`](https://hive.apache.org) package are vulnerable to Access Restriction Bypass.
Apache Hive (JDBC + HiveServer2) implements SSL for plain TCP and HTTP connections (it supports both transport modes). While validating the server's certificate during the connection setup, the client in Apache Hive before 1.2.2 and 2.0.x before 2.0.1 doesn't seem to be verifying the common name attribute of the certificate. In this way, if a JDBC client sends an SSL request to server abc.com, and the server responds with a valid certificate (certified by CA) but issued to xyz.com, the client will accept that as a valid certificate and the SSL handshake will go through.

## Remediation
Upgrade `org.apache.hive:hive-service` to version 1.2.2, 2.0.1 or higher.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2017/05/24/1)
