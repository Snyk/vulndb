## Overview
[`craft-ai-icons`](https://www.npmjs.com/package/craft-ai-icons) is craft ai's icon font.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

You can read more about `Resources downloaded over insecure protocol` on our [blog](https://snyk.io/blog/https-breaking-through/).

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!


## Remediation
There is no fix version for `craft-ai-icons`.

## References
- [Vulnerable code](https://github.com/craft-ai/craft-ai-icons/blob/65496e1d04104c3a0ec7c04d5616674d07a46b20/package.json#L27)
