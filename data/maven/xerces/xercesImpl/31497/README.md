## Overview
Affected versions of [`xerces:xercesImpl`](https://xerces.apache.org/) are vulnerable to Denial of Service (DoS) attacks. An attacker may be able to force the target server to parse an FTP URL, which points to an FTP server controller by the attacker. When the target server is mid way through fetching the FTP resources, the attackers malicious FTP server will exit the process and will leave the thread hanging in the target server.

It is possible to conduvt this attack only if the following conditions are met:
* An attacker can pass an URL parameter that points to a controlled FTP server to the target.
* Target server uses vulnerable component(s) to fetch the resource specified by the attacker.
* Target server does not prevent fetching of FTP URI resources.

## Remediation
Upgrade there is no fix for `xerces:xercesImpl`.

## References
- [Blog Post](https://blogs.securiteam.com/index.php/archives/3271)
