## Overview
[`ec2-price`](https://www.npmjs.com/package/ec2-price) retrieves the latest EC2 prices via command line.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

Many thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability.

## Disclosure Timeline
- April 24th, 2017 - Disclosed to package owner
- April 24th, 2017 - Issue acknowledged by package owner.
- April 27th, 2017 - Issue fixed and version `0.5.0` released.

## Remediation
Upgrade `ec2-price` to version 0.5.0 or higher.

## References
- [GitHub Commit](https://github.com/toshimaru/ec2-price/commit/45fe7ec0ed9600d324a47d9161741b3571242693)
