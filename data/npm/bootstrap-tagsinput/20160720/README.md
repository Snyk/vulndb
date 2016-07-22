## Overview
Bootstrap Tags Input is a jQuery plugin providing a Twitter Bootstrap user interface for managing tags. 

The plugin supports various inputs for each tag, such as tagClass, itemValue and itemText, and all of those are HTML Encoded as they should be. However, HTML encoding was overlooked for the `itemTitle` parameter, exposing a potential Cross-Site Scripting (XSS) vulnerability.

## Remediation
Avoid passing user input to the `itemTitle` parameter, or avoid using it altogether, until a patch is made available.

## References
- https://github.com/bootstrap-tagsinput/bootstrap-tagsinput/issues/501
