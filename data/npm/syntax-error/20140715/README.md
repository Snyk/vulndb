## Overview

There was a security vulnerability where a malicious file could execute code when browserified. Make sure your installation of browserify is using syntax-error@1.1.1 or later. 

_Source: [Node Security Project](https://nodesecurity.io/advisories/37)_

## Details

The vulnerability involves breaking out of Function(), which was used to check syntax for more informative errors. In node 0.10, Function() seems to be implemented in terms of eval(), so malicious code can execute even if the function returned by Function() was never called. node 0.11 does not appear to be vulnerable.

Thanks to [Cal Leeming] (cal@iops.io) for discovering and disclosing this bug!

## Remediation
Update to version 1.1.1 or greater. If this is being used in conjunction with browserify, update browserify to 4.2.1 or greater.

## References

- [Browserify 4.2.1 Update](https://github.com/substack/node-browserify/blob/master/changelog.markdown#421)
- https://github.com/substack/node-syntax-error/commit/9aa4e66eb90ec595d2dba55e6f9c2dd9a668b309
- https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-7192