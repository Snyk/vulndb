## Overview

An escaping problem within to_html function can lead to a XSS vulnerability.

## Details

**Example:**

```
document.write(Mustache.to_html('<input value="{{val}}" />', {val:'maybe" onclick="alert(\'xss\');" nothing="'}));
```
## References
- https://github.com/janl/mustache.js/issues/112
