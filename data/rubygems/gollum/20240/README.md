## Overview
[`gollum`](https://rubygems.org/gems/gollum) is a simple, Git-powered wiki with an API and local frontend.
Affected versions of this gem are vulnerable to arbitrary file access via its upload file functionality lacking validation when handling temporary files during the upload process.

## Remediation
Upgrade to version `>= 4.0.1` or greater.

## References
- [Rubysec](http://rubysec.com/advisories/CVE-2015-7314)
- [Github commit]( https://github.com/gollum/gollum/commit/ce68a88293ce3b18c261312392ad33a88bb69ea1)
