## Overview
Affected version of [`github.com/cloudflare/golz4`](https://github.com/cloudflare/golz4) are vulnerable to Arbitrary Code Execution.

Vulnerable versions of the library used the obsolete native `LZ4_uncompress()` function possibly leading to memory corruption resulting in arbitrary code execution in case of successful exploitation. The fix made sure to use the safe version of the function called `LZ4_decompress_safe()`.

## References
- [Don A. Bailey's Blog](http://blog.securitymouse.com/2014/07/bla-bla-lz4-bla-bla-golang-or-whatever.html)
- [GitHub Issue](https://github.com/cloudflare/golz4/issues/5)
- [GitHub Commit](https://github.com/cloudflare/golz4/commit/199f5f7878062ca17a98e079f2dbe1205e2ed898)
