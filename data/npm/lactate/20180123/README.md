## Overview
[`lactate`](https://www.npmjs.com/package/lactate) is a static file handler.

Affected versions of this package are vulnerable to Directory Traversal.

An attacker may use a specially crafted `GET` request and traverse the directory structure of a host using the lactate web server package, allowing them read access to arbitrary files outside of the specified web root. 

Mitigating factors:
Only files that the user running `lactate` has permission to read will be accessible via this vulnerability.

Proof of concept by Yasin Soliman:
- Globally install the `lactate` package and `cd` to a directory you wish to serve assets from. 
- Run `lactate -p 8081` to start serving files from this location.
- Running the following cURL request:

```
curl "http://127.0.0.1:8081/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd"
```

## Remediation
There is no fix version for `lactate`.

## References
- [HackerOne Report](https://hackerone.com/reports/296645)
