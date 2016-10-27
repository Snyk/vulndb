## Overview

[`passenger`](https://rubygems.org/gems/passenger) is a modern web server and application server for Ruby, Python and Node.js, optimized for performance, low memory usage and ease of use.

Affected versions of this gem create the server instance directory insecurely. An attacker can create a symlink to overwrite an otherwise inaccessible file, possibly inserting content provided by the attacker.

## References

- http://rubysec.com/advisories/CVE-2014-1831
- https://github.com/phusion/passenger/commit/34b1087870c2
- https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=736958
