## Overview
[Electron](https://electronjs.org/) is a framework that lets you write cross-platform desktop applications using JavaScript, HTML and CSS.

Affected version of this package are vulnerable to URL Spoofing, when opening PDFs in PDFium resulting loading arbitrary PDFs that a hacker can control.

## Remediation
Upgrade `Electron` to version 1.7.6 or higher.

## References
- [GitHub Pull Request](https://github.com/electron/electron/pull/10008)
- [GitHub Commit](https://github.com/electron/electron/pull/10008/commits/9a7651a93faaaef0534df1ab77268d7deb9d3165)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000424)
