## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Arbitrary File Existence Exposure.

## Details
Specially crafted requests can be used to determine whether a file exists on the file system, outside of the Rails application's root directory. The files will not be served, but attackers can determine whether or not the file
exists.

## References

- http://rubysec.com/advisories/CVE-2014-7829
- https://groups.google.com/forum/#!topic/rubyonrails-security/rMTQy4oRCGk
