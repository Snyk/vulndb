## Overview
[`org.apache.tika:tika-server`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tika-server%22)
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks which occurred due to of improperly handling tags
without a closing `>` when reaching EOF.

## Details
JSoup did not properly validate user-supplied HTML content. Certain HTML snippets could get past the validator without being detected as unsafe. A remote attacker could use a specially crafted HTML snippet to execute arbitrary web script in the user's browser.

## References
- [OSS Security](http://seclists.org/oss-sec/2015/q3/452)
- [GitHub PR](https://github.com/jhy/jsoup/pull/582)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2015-6748)
