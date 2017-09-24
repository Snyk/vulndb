## Overview
[`Pillow`](https://pypi.python.org/pypi/Pillow) is a Python Imaging Library (Fork).

Affected versions of this package are vulnerable to Symlink attacks due to insecurely creating temporary files.
The (1) `load_djpeg` function in `JpegImagePlugin.py`, (2) `Ghostscript` function in `EpsImagePlugin.py`, (3) load function in `IptcImagePlugin.py`, and (4) copy function in `Image.py` do not properly create temporary files, which allow local users to overwrite arbitrary files and obtain sensitive information via a symlink attack on the temporary file.

## Remediation
Upgrade to version `2.3.1` or greater.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-1932)
- [GitHub Commit](https://github.com/python-pillow/Pillow/commit/4e9f367dfd3f04c8f5d23f7f759ec12782e10ee7)
