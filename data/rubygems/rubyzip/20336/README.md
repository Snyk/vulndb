## Overview
[`rubyzip`](https://rubygems.org/gems/rubyzip) is rubyzip is a ruby module for reading and writing zip files.
Affected versions of the package are vulnerable to Directory Traversal in the `Zip::File` component.  If a site allows uploading of .zip files, an attacker can upload a malicious file that uses `../` pathname substrings to write arbitrary files to the filesystem.

Related to [`minitar`](https://snyk.io/vuln/SNYK-RUBY-MINITAR-20335) and [`archive-tar-minitar`](https://snyk.io/vuln/SNYK-RUBY-ARCHIVETARMINITAR-20337).

## Remediation
Upgrade `rubyzip` to version 1.2.1 or higher.

## References
- [Github Issue](https://github.com/rubyzip/rubyzip/issues/315)
- [Github Commit](https://github.com/rubyzip/rubyzip/commit/ce4208fdecc2ad079b05d3c49d70fe6ed1d07016)
