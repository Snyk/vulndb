## Overview
[Send](https://www.npmjs.com/package/send) is a library for streaming files from the file system as an http response. It supports partial responses (Ranges), conditional-GET negotiation, high test coverage, and granular events which may be leveraged to take appropriate actions in your application or framework.

A root path disclosure vulnerability exists in `send` versions prior to 0.11.1.

## Remediation
Upgrade `send` to version 0.11.1. or greater. 

If a direct dependency update is not possible, use [snyk wizard](https://snyk.io/docs/using-snyk#wizard) to patch this vulnerability.

## References

- https://github.com/pillarjs/send/pull/70
- https://github.com/pillarjs/send/commit/98a5b89982b38e79db684177cf94730ce7fc7aed
- https://github.com/expressjs/serve-static/blob/master/HISTORY.md#181--2015-01-20
- http://expressjs.com/advanced/security-updates.html
