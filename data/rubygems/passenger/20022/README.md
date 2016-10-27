## Overview

[`passenger`](https://rubygems.org/gems/passenger) is a modern web server and application server for Ruby, Python and Node.js, optimized for performance, low memory usage and ease of use.

Affected versions of this gem create the server instance directory insecurely. An attacker can create a symlink to overwrite an otherwise inaccessible file, possibly inserting content provided by the attacker.

This vulnerability is triggered during application startup. If the program has completed the start up process this vulnerability is no longer exploitable.

## References

- http://rubysec.com/advisories/CVE-2012-6135/
- http://old.blog.phusion.nl/2013/03/05/phusion-passenger-4-0-beta-1-and-2-arbitrary-file-deletion-vulnerability/
