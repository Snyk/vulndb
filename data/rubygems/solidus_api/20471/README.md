## Overview
[`solidus_api`](https://rubygems.org/gems/solidus_api) is REST API for the Solidus e-commerce framework.

Affected versions of the package are vulnerable to Privilege Escalation.
A lower-level admin can change the email address of a higher-level admin to an email address they have access to, and as a result they will gain access to the admin's permissions.

## Remediation
Upgrade `solidus_api` to version 1.1.0.pre2 or higher.

## References
- [Github PR](https://github.com/solidusio/solidus/pull/421)
- [Github Commit](https://github.com/solidusio/solidus/commit/01a887207170d39b6a8b8a8f82c2f3ed7afd90ac)
