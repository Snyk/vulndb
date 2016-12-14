## Overview
[`hostr`](https://www.npmjs.com/package/hostr) is a simple web server for the current working directory.  Used for hello world style web sites hosting only files in current directory structure.  Watches files and integrates with LiveReload.
Affected versions of the package do not filter http GET requests in javascript code, allowing an attacker to retrieve confidential files over the network by requesting urls like:  `http://localhost:3000/../../../etc/passwd`. CURLing the same request will not succeed.

Many thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability.

## Remediation
Upgrade `hostr` to version 2.3.6 or higher.

## References
- [Github Issue](https://github.com/henrytseng/hostr/issues/8)
- [Github Commit](https://github.com/henrytseng/hostr/commit/789a00047459fd80b6f0a9701a1378a47fb73ba8)
