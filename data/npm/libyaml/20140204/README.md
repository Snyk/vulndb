## Overview:

LibYAML, the library that libyaml provides bindings for is vulnerable to a heap-based buffer overflow when parsing YAML tags.

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

## Recommendations:

- Update to version 0.2.3 that includes a version of LibYAML that contains a fix for this issue.

## References:
- [CVE-2013-6393](http://cve.mitre.org/cgi-bin/cvename.cgi?name=2013-6393)
- https://bitbucket.org/xi/libyaml/pull-request/1/fix-cve-2013-6393/diff
