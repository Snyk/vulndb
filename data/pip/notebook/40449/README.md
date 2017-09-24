## Overview
[`notebook`](https://pypi.python.org/pypi/notebook) is a web-based notebook environment for interactive computing.

Affected versions of this package are vulnerable to Cross-site Request Forgery (CSRF) attacks due to improper validation of the CSRF token. A malicious user may be able to spawn new kernels and create empty, untitled files on the user's notebook server.

**Note:** This affects users of Firefox or Microsoft (IE, Edge) browsers, and any other browsers that do not set the Origin header on cross-site forms. WebKit and Blink based browsers like Safari and Chrome are not affected.

## References
- [Github Commit](https://github.com/jupyter/notebook/commit/c5bb329bf8c79a6f46cff8b433a8588a7eb6756e)
- [Notebook Security Notes](http://blog.jupyter.org/2016/12/21/jupyter-notebook-4-3-1/)
