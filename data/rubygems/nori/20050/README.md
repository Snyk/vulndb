## Overview

[`nori`](https://rubygems.org/gems/nori) is an XML parser based on [`crack`](https://snyk.io/vuln/SNYK-RUBY-CRACK-20049).

Affected versions of `nori` contain a parameter parsing error that may allow an attacker to execute arbitrary code. This vulnerability has to do with type casting during parsing, and is related to [CVE-2013-0156](https://snyk.io/vuln/SNYK-RUBY-ACTIONPACK-20047).

## References
- https://support.cloud.engineyard.com/hc/en-us/articles/205404708-January-14-2013-Security-vulnerabilities-httparty-extlib-crack-nori-Update-these-gems-immediately
