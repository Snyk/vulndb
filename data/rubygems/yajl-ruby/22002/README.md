## Overview
[`yajl-ruby`](https://rubygems.org/gems/yajl-ruby) Ruby C bindings to the excellent Yajl JSON stream-based parser library.

Affected versions of this project are vulnerable to Denial of Service (DoS) attacks.
In the yajl-ruby gem 1.3.0 for Ruby, when a crafted JSON file is supplied to `Yajl::Parser.new.parse`, the whole ruby process crashes with a SIGABRT in the yajl_string_decode function in yajl_encode.c. This results in the whole ruby process terminating and potentially a denial of service.

## References
- [GitHub Issue](https://github.com/brianmario/yajl-ruby/issues/176)
- [GitHub Commit](https://github.com/brianmario/yajl-ruby/commit/a8ca8f476655adaa187eedc60bdc770fff3c51ce)
