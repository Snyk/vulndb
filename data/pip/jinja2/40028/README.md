## Overview
[`Jinja2`](https://pypi.python.org/pypi/Jinja2) is a A small but fast and easy to use stand-alone template engine written in pure python.

Affected versions of this package are vulnerable to Insecure Defaults attacks.
The default configuration for bccache.FileSystemBytecodeCache in Jinja2 before 2.7.2 does not properly create temporary files, which allows local users to gain privileges via a crafted .cache file with a name starting with `jinja2` in /tmp.

## Remediation
Upgrade to version `2.7.2` or greater.

## References
- [bugzilla redhat](https://bugzilla.redhat.com/CVE-2014-1402)
- [Debian Security Advisory](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=734747)
- [GitHub Commit](https://github.com/mitsuhiko/jinja2/commit/acb672b6)
