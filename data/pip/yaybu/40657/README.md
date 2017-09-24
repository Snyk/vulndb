## Overview
[`Yaybu`](https://pypi.python.org/pypi/Yaybu) is used for server deployment and configuration management in Python.

Affected versions of this package are vulnerable to Information Exposure. Permissions on a file were set only after writing a files content, which gives the attackers a window to obtain the file content.

## References
- [Github ChangeLog](https://github.com/yaybu/yaybu/blob/master/CHANGES#L309)
- [Github Issue](https://github.com/yaybu/yaybu/issues/62)
- [Github Commit](https://github.com/yaybu/yaybu/commit/7d07a4c7c0cea7379add71e4dd2457a766d5952a)
