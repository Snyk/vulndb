## Overview

[`curb`](https://rubygems.org/gems/curb) provides Ruby-language bindings for the libcurl(3), a fully-featured client-side URL transfer library.

Affected versions of this gem contain a flaw that is triggered when handling an empty `http_put` body. This may allow a remote attacker to crash an application linked against the library.

## References

- http://rubysec.com/advisories/OSVDB-114600
