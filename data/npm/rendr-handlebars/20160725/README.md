## Overview
Rendr-handlebars is a library that allows the handlebars templating engine to be used with Rendr framework projects.  The templating can occur either on the client or the server.

Versions up to 1.1.3 have a cross site scripting (XSS) issue when rendered inside a `_block` during client side rendering. Server side rendering is not affected and is properly escaped.

Source: _Node Security Project_

## Remediation
Upgrade to `rendr-handlerbars` version `1.1.4`

## References
- https://github.com/rendrjs/rendr-handlebars/pull/61
- https://github.com/rendrjs/rendr/pull/513

