## Overview
[`sprockets`](https://rubygems.org/gems/sprockets) is a Rack-based asset packaging system that concatenates and serves JavaScript, CoffeeScript, CSS, LESS, Sass, and SCSS.
Affected versions of this gem are vulnerable to Arbitrary File Existance Disclosure via specially crafted requests that can be used to determine whether a file exists on the filesystem that is outside an application's root directory. The files will not be served, but attackers can determine whether or not the file exists.

## References
- http://rubysec.com/advisories/CVE-2014-7819
- https://groups.google.com/forum/#!topic/rubyonrails-security/doAVp0YaTqY
