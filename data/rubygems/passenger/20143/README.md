## Overview

[`passenger`](https://rubygems.org/gems/passenger) is a modern web server and application server for Ruby, Python and Node.js, optimized for performance, low memory usage and ease of use.

Affected versions of this gem create the server instance directory insecurely. An attacker can create a symlink to overwrite an otherwise inaccessible file, possibly inserting content provided by the attacker.

## References

- http://rubysec.com/advisories/CVE-2014-1832
- https://bugzilla.redhat.com/show_bug.cgi?id=1058992
- https://github.com/phusion/passenger/commit/94428057c602da3d6d34ef75c78091066ecac5c0
