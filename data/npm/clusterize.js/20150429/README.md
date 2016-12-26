## Overview
[`clusterize.js`](https://www.npmjs.com/package/clusterize.js) is Tiny vanilla JS plugin to display large data sets easily.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS), as there is no validation to which tag is used to create an empty row.
```js
var empty_row = '<' + opts.tag + ' class="' + opts.no_data_class + '">';
```
Attackers can use this to their advantage and use specially crafted scripts to exploit the program. This was fixed by DOM methods like `document.createElement`.

## Remediation
Upgrade `clusterize.js` to version 0.3.1 or higher.


## References
- https://github.com/NeXTs/Clusterize.js/issues/4
- https://github.com/NeXTs/Clusterize.js/pull/5/commits/0c3d6486d6dac4c7dd04aa5525d4f705ec3351fc
