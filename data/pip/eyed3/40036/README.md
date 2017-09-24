## Overview
[`eyeD3`](https://pypi.python.org/pypi/eyeD3) is a Python audio data toolkit (ID3 and MP3)

Affected versions of this package are vulnerable due to the Insecure use of temporary files.
tag.py in eyeD3 (aka python-eyed3) 7.0.3, 0.6.18, and earlier for Python allows local users to modify arbitrary files via a symlink attack on a temporary file.

## Remediation
Upgrade to version `7.0.3` or greater.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2014-1934)
- [Debian Security Advisory](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=737062)
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-1934)
