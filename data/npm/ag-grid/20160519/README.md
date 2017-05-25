## Overview
[`ag-grid`](https://www.npmjs.com/package/ag-grid) is an advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components.

Affected versions of the package are vulnerable to HTML Injection. `ag-grid` used mozilla's `Element.innerHTML`, which is vulnerable to Cross-Site Scripting (XSS) attacks when used within a user-inputted value. In this case an attacker could insert a malicious username and initiate a XSS attack, like:
```html
<span onclick="alert('hacked!')">John Smith</span>
```

## Remediation
Upgrade `ag-grid` to version 5.0.0 or higher.

## References
- [GitHub Issue](https://github.com/ceolter/ag-grid/issues/913)
- [GitHub Commit](https://github.com/ceolter/ag-grid/commit/828cdcf68aa9c766439448db50b696b87e1d4962)
- [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations)
