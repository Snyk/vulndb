## Overview

LibYAML, the library that libyaml provides bindings for is vulnerable to a heap-based buffer overflow when parsing YAML tags.

_Source: [Node Security Project](https://nodesecurity.io/advisories/21)_

## Remediation

Update to version 0.2.3 that includes a version of LibYAML that contains a fix for this issue.

## References

- https://bitbucket.org/xi/libyaml/pull-request/1/fix-cve-2013-6393/diff
