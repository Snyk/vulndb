## Overview
[rack-mini-profiler](https://rubygems.org/gems/rack-mini-profiler) is a profiling toolkit for Rack applications with Rails integration.
Affected versions of this gem are vulnerable to information exposure via carefully crafted requests. Attackers and unauthorized users can get ahold of strings and objects allocated during the request.

## References
- http://rubysec.com/advisories/CVE-2016-4442
- https://github.com/MiniProfiler/rack-mini-profiler/commit/4273771d65f1a7411e3ef5843329308d0e2d257c
