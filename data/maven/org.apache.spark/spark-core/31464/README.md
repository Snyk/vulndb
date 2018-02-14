## Overview
[`org.apache.spark:spark-core`](https://spark.apache.org) is a fast and general cluster computing system for Big Data.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks.

In Apache Spark before 2.2.0, it is possible for an attacker to take advantage of a user's trust in the server to trick them into visiting a link that points to a shared Spark cluster and submits data including MHTML to the Spark master, or history server. This data, which could contain a script, would then be reflected back to the user and could be evaluated and executed by MS Windows-based clients. It is not an attack on Spark itself, but on the user, who may then execute the script inadvertently when viewing elements of the Spark web UIs.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave).

## Remediation
Upgrade `org.apache.spark:spark-core` to version 2.2.0 or higher.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2017/07/12/2)
