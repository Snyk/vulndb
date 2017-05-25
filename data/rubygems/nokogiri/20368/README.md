## Overview
[`nokogiri`](https://rubygems.org/gems/nokogiri) (鋸) is an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.

Affected versions of the package are vulnerable to Out of Bounds Memory Write. Nokogiri bundles  the `libxslt` library, which is vulnerable in versions below 3. The `xsltAddTextString` function in `transform.c` lacked a check for integer overflow during a size calculation, which allowed a remote attacker to perform an out of bounds memory write via a crafted HTML page.

## Remediation
Upgrade `nokogiri` to version 1.7.2 or higher.

## References
- [GitHub Issue](https://github.com/sparklemotion/nokogiri/issues/1634)
- [GitHub Commit](https://github.com/sparklemotion/nokogiri/commit/0859c487c9f6933d96d998560d88147c841f7336)
