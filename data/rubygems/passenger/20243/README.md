## Overview

[`passenger`](https://rubygems.org/gems/passenger) is a modern web server and application server for Ruby, Python and Node.js, optimized for performance, low memory usage and ease of use.

Affected versions of this gem make it possible for clients to overwrite headers set by the server.

`passenger` 5 uses an SCGI-inspired format to pass headers to Ruby/Python applications, while `passenger` 4 uses an SCGI-inspired format to pass headers to all applications. This implies a conversion to `UPPER_CASE_WITH_UNDERSCORES` whereby the difference between characters like `-` and `_` is lost.

## References
- http://rubysec.com/advisories/CVE-2015-7519
- https://blog.phusion.nl/2015/12/07/cve-2015-7519/
