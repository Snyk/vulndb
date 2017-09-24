## Overview
[`collective_solr`](https://pypi.python.org/pypi/collective_solr) is a Solr integration for external indexing and searching.

Affected versions of this package are vulnerable to Directory Traversal. The method `getObject` uses unrestricted traversal, leading to information leaks.

## References
- [GitHub Commit](https://github.com/collective/collective.solr/commit/f6745d3d0a9efa804e7a6a46f8eaf0eb8aff039d)
