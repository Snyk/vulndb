## Overview

[`rdoc`](https://rubygems.org/gems/rdoc) is a gem that produces HTML and command-line documentation for Ruby projects.

Affected versions of `rdoc` are vulnerable to a Cross-site Scripting (XSS) attack, which may lead to cookie disclosure to third parties.

## Details

The exploit exists in `darkfish.js` which is copied from the `rdoc` install location to the generated documentation. Due to the way that `rdoc` generates static documentation, any documentation generated using an affected version of `rdoc` should be regenerated using the patched version.

## References
- https://www.ruby-lang.org/en/news/2013/02/06/rdoc-xss-cve-2013-0256/
