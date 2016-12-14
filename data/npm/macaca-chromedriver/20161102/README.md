## Overview
[`macaca-chromedriver`](https://www.npmjs.com/package/macaca-chromedriver) is a Node.js wrapper for the selenium chromedriver.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol.

## Remediation
Update `macaca-chromedriver` to version `1.0.27` or higher.

## References
- [Github Commit](https://github.com/macacajs/macaca-chromedriver/commit/03cb4a186b83122383bc2292761d418f519bf3b9)
