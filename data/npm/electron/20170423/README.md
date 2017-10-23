## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks.

When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `electron` to version 1.6.8 or higher.

## References
- [Github PR](https://github.com/electron/electron/pull/9249)
- [Github Commit](https://github.com/electron/electron/commit/c146f8a308a5eb8d74fcd2fc566dc43e4eeca467)
