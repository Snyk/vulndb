## Overview
[`aiohttp`](https://pypi.python.org/pypi/aiohttp) is a Async http client/server framework (asyncio)
Affected versions of this package are vulnerable to Directory Traversal attacks due gluing the base directory with the requested path with `os.path.join`. Only paths with `..` are rejected.

## References
- [GitHub Issue](https://github.com/aio-libs/aiohttp/issues/380)
- [GitHub PR](https://github.com/aio-libs/aiohttp/pull/383)
- [GitHub Commit](https://github.com/aio-libs/aiohttp/commit/d9fdf551aaa388a738febe5ce697c0b07f597e94)
- [GitHub History](https://github.com/aio-libs/aiohttp/blob/master/HISTORY.rst#0163-05-30-2015)
