## Overview
[`wpull`](https://pypi.python.org/pypi/wpull) is a Wget-compatible web downloader and crawler.

Affected versions of this package are vulnerable to Information Exposure. When requesting HTTP content from a HTTPS source, the `referer` field is set unconditionally which leaks information.

## References
- [GitHub Issue](https://github.com/chfoo/wpull/issues/219)
- [GitHub Commit](https://github.com/chfoo/wpull/commit/8c456fd47b0b1a1a63dbc6e762ffafbd1de6a8db)
