## Overview
[`nokogiri`](https://rubygems.org/gems/nokogiri) (鋸) is an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.

Affected versions of the package are vulnerable to Arbitrary Code Execution or a Denial of Service (memory corruption) via a crafted web site. Nokogiri bundles  the `libxslt` library, which is vulnerable in versions below 3.

## Remediation
Upgrade `nokogiri` to version 1.7.2 or higher.

## References
- [Github Issue](https://github.com/sparklemotion/nokogiri/issues/1634)
- [Github Commit](https://github.com/sparklemotion/nokogiri/commit/0859c487c9f6933d96d998560d88147c841f7336)
