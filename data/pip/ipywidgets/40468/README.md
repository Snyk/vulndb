## Overview
[`ipywidgets`](https://pypi.python.org/pypi/ipywidgets) is HTML widgets for Jupyter.

Affected versions of this package are vulnerable to Arbitrary Code Execution. A widget snapshotting feature was introduced in `ipywidgets` 5.0.0 allowed execution of javascript code upon on loading and saving of a notebook.

**Note:** This only affects ipywidgets in conjunction with the Jupyter Notebook.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2016/07/01/4)
- [Release notes](http://blog.jupyter.org/2016/09/26/ipywidget-security-release/)
