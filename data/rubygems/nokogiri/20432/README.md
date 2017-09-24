## Overview
[`nokogiri`](https://rubygems.org/gems/nokogiri) (鋸) is an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.

Affected versions of the package are vulnerable to many vulnerabilities, including Arbitrary Code Execution and Denial of Service (DoS), and Sensitive Information Exposure. Nokogiri bundles the `libxml2` library, which is vulnerable in versions below 2.9.5.

The CVEs assigned to the vulnerabilities are:

### CVE-2017-0663
> It was discovered that a type confusion error existed in libxml2. An attacker could use this to specially construct XML data that could cause a denial of service or possibly execute arbitrary code.

### CVE-2017-7375
> It was discovered that libxml2 did not properly validate parsed entity references. An attacker could use this to specially construct XML data that could expose sensitive information.

### CVE-2017-7376
> It was discovered that a buffer overflow existed in libxml2 when handling HTTP redirects. An attacker could use this to specially construct XML data that could cause a denial of service or possibly execute arbitrary code.

### CVE-2017-9047
> Marcel Böhme and Van-Thuan Pham discovered a buffer overflow in libxml2 when handling elements. An attacker could use this to specially construct XML data that could cause a denial of service or possibly execute arbitrary code.

### CVE-2017-9048
> Marcel Böhme and Van-Thuan Pham discovered a buffer overread in libxml2 when handling elements. An attacker could use this to specially construct XML data that could cause a denial of service.

### CVE-2017-9049, CVE-2017-9050
> Marcel Böhme and Van-Thuan Pham discovered multiple buffer overreads in libxml2 when handling parameter-entity references. An attacker could use these to specially construct XML data that could cause a denial of service.


## Remediation
Upgrade `nokogiri` to version 1.8.1 or higher.

## References
- [GitHub Issue](https://github.com/sparklemotion/nokogiri/issues/1673)
- [Ubuntu Security Notice](https://usn.ubuntu.com/usn/usn-3424-1/)
