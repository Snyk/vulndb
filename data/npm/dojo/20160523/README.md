## Overview
`dojo` is the core module for the Dojo Toolkit. The dojo package covers a wide range of functionality like AJAX, DOM manipulation, class-type programming, events, promises, data stores, drag-and-drop and internationalization libraries.

There is a bug in the `dijit.Editor` and `textarea` where input, even sanitized, executes javascript. This is because the `<textarea>` tag only sees the final, unsanitized, user input.

Source: _Node Security Project_

## Remediation
Upgrade to version `1.1` or higher.

## References
- https://bugs.dojotoolkit.org/ticket/2140

