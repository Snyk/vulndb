## Overview
['c3'](https://www.npmjs.com/package/c3) is a D3-based reusable chart library that enables deeper integration of charts into web applications.

Versions `<=0.4.10` are vulnerable to a Cross-site Scripting (XSS) vulnerability through improper html sanitization on rendered tooltips.

## Remediation
Upgrade to 0.4.11 or later

## References
- https://github.com/c3js/c3/issues/1536
- https://github.com/c3js/c3/commit/de3864650300488a63d0541620e9828b00e94b42

