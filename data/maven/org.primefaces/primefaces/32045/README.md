## Overview
[`org.primefaces:primefaces`](https://www.primefaces.org/) is a UI library for the Java EE Ecosystem.

Affected versions of this package are vulnerable to Arbitrary Code Execution due to a weak encryption flaw. An unauthenticated user  may be able to inject arbitrary Expression Language code to the `PrimeFaces` custom EL parser.

## Remediation
Upgrade `org.primefaces:primefaces` to version 6.0 or higher.

## References
- [Giorgio Fedon's Blog](http://blog.mindedsecurity.com/2016/02/rce-in-oracle-netbeans-opensource.html)
- [GitHub Issue](https://github.com/primefaces/primefaces/issues/1152)
- [GitHub commit](https://github.com/primefaces/primefaces/commit/26e44eb7962cbdb6aa2f47eca0f230f3274358f0)
- [ExploitDB](https://www.exploit-db.com/exploits/43733/)
- [Cryptosense Blog](https://cryptosense.com/weak-encryption-flaw-in-primefaces/)
