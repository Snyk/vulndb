## Overview

An escaping problem within to_html function can lead to a XSS vulnerability.

## Example

```
document.write(Mustache.to_html('<input value="{{val}}" />', {val:'maybe" onclick="alert(\'xss\');" nothing="'}));
```

