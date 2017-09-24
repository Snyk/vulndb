## Overview
[`logilab-common`](https://pypi.python.org/pypi/logilab-common) is a collection of low-level Python packages and modules used by Logilab projects

Affected versions of this package are vulnerable to Insecure use of temporary file attacks.
The Execute class in shellutils in logilab-commons before 0.61.0 uses tempfile.mktemp, which allows local users to have an unspecified impact by pre-creating the temporary file.

## Remediation
Upgrade to version `0.61.0` or greater.

## References
- [oss-sec](http://seclists.org/oss-sec/2014/q1/205)
- [Debian Security Advisory](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=737051)
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-1839)
