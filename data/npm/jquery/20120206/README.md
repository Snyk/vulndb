## Overview
[`jquery`](https://www.npmjs.com/package/jquery) is JavaScript library for DOM operations.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks. The `jQuery(strInput)` function does not differentiate selectors from HTML in a reliable fashion. In the vulnerable version, jQuery determined whether the input was HTML or not by looking for the '<' character anywhere in the string, giving attackers more flexibility when attempting to construct malicious payload. 

In the fixed versions, jQuery only deems the input to be HTML if it explicitly starts with '<', limiting exploitability only to attackers who can control the beginning of a string, which is far less common.

## Remediation
Upgrade `jquery` to version 1.9.0 or higher.

## References
- [JQuery Issue tracker](https://bugs.jquery.com/ticket/11290)
- [Github Commit](https://github.com/jquery/jquery/commit/05531fc4080ae24070930d15ae0cea7ae056457d)
- [jsfiddle](http://jsfiddle.net/C8dgG/)
