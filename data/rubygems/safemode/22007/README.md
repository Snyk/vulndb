## Overview
[safemode](https://rubygems.org/gems/safemode) is a library for safe evaluation of Ruby code based on RubyParser and Ruby2Ruby.

Affected versions of this package are vulnerable to bypassing safe mode limitations via special Ruby syntax. This can
lead to deletion of objects for which the user does not have delete 
permissions or possibly to privilege escalation.

## Remediation 
Upgrade `safemode` to version 1.3.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7540)
- [GitHub Commit](https://github.com/svenfuchs/safemode/pull/23)
- [GitHub Commit](https://github.com/svenfuchs/safemode/commit/a019520e441dab1a277fa9aeb41e9266783e9533)
