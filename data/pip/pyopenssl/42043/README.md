## Overview
[`pyOpenSSL`](http://pypi.python.org/pypi/pyOpenSSL) is a Python wrapper module around the OpenSSL library .

Affected versions of this package are vulnerable to Hostname Check Bypass.
It implemented hostname identity checks but it did not properly handle hostnames in a certificate that contained null bytes. 

## References
- [RedHat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4314)
-[PYOpenSSL Mailing List](https://mail.python.org/pipermail/pyopenssl-users/2013-September/000478.html)
