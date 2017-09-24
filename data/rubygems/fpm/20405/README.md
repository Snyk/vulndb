## Overview
[`fpm`](https://rubygems.org/gems/fpm) is Convert directories, rpms, python eggs, rubygems, and more to rpms, debs, solaris packages and more. Win at package management without wasting pointless hours debugging bad rpm specs!.

Affected versions of the package are vulnerable to Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `fpm` to version 0.4.36 or higher.

## References
- [Github PR](https://github.com/jordansissel/fpm/pull/432)
- [Github Commit](https://github.com/jordansissel/fpm/commit/d0c5674fb1c359f5661af52c0296617516616625)
