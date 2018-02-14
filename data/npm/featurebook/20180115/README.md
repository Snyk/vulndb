## Overview
[`featurebook`](https://www.npmjs.com/package/featurebook) is a command line tool (and Node.js library) for generating beautiful system specifications from Gherkin source files. 

Affected versions of the package are vulnerable to Directory Traversal. 
A crafted request can be used to traverse the directory structure of a host using the featurebook package, and request arbitrary files outside of the specified web root.

## References
- [Nodejs Security Working Group](https://github.com/nodejs/security-wg/blob/master/vuln/npm/358.json)
- [Hackerone Report](https://hackerone.com/reports/296305)