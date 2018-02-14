## Overview
[`augustine`](https://www.npmjs.com/package/augustine) is a simple http server for serving static resources 

Affected versions of this package are vulnerable to Directory Traversal.

An attacker may use a specially crafted `GET` request and traverse the directory structure of a host using the lactate web server package, allowing them read access to arbitrary files outside of the specified web root. 

Proof of Concept by Yasin Soliman:
- Install the `lactate` package and `cd` to a directory you wish to serve assets from. 
- Run `augustine -p 8081` to start serving files from this location.
- Running the following cURL request:

```
curl "http://127.0.0.1:8081//etc/passwd"
```

## Remediation
There is no fix version for `augustine`.

## References
- [HackerOne Report](https://hackerone.com/reports/296282)
