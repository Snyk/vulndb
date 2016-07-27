## Overview
[`jqTree`](https://www.npmjs.com/package/jqtree) is a jQuery plugin for displaying and manipulating hierarchical data in a tree format.  

Versions 1.3.3 and below contain a cross site scripting vulnerability in the drag and drop functionality for modifying tree data. A node that contains a standard XSS vector will have its payload execute when a user attempts to drag a node to a different position in the hierarchy.

Source: _Node Security Project_

## Remediation
Upgrade to `1.3.4` or later.

## References
- https://github.com/mbraak/jqTree/issues/437

