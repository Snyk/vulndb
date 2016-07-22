## Overview
jQuery-UI is a library for manipulating UI elements via jQuery.

One of the provided elements is a dialog, which also supports showing custom text for closing via the [_closeText_](https://api.jqueryui.com/dialog/#option-closeText) property. However, the content of this property is added to the HTML with no sanitization, allowing arbitrary scripts.

If you allow user input to be passed through to the _closeText_ property, you may have a Cross-Site Scripting (XSS) vulnerability.

## Remediation
Upgrade `jquery-ui` to `1.12.0` or greater.

## References
- https://github.com/jquery/jquery-ui/pull/1622
- https://github.com/jquery/api.jqueryui.com/issues/281
