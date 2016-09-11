[![logo](misc/snyk-logo-incl-word.png)](https://snyk.io)

Snyk Vulnerability Database
===========================

This is the vulnerability database used by [Snyk](https://github.com/Snyk/snyk), a tool that helps you find and fix known vulnerabilities in your Node.js dependencies, both ad hoc and as part of your CI (Build) system.

You can browsed the issues more easily on the [Snyk website](https://snyk.io/vuln/) at [https://snyk.io/vuln/](https://snyk.io/vuln/).

## Structure
Under the `data/npm` folder you will find a list of folders that match the names of vulnerable [npm](https://npmjs.com) packages, then a `YYYYMMDD` folder containing the data files.
For example, the latest Denial of Service vulnerability in the `ms` package will have the following path `npm/ms/20151024/`.
```
data/
  npm/
    bassmaster/
      20140927/
        README.md
        data.json
        bussmaster_vuln_fix.patch
    jsonwebtoken/
      20150331/
        README.md
        data.json
      20150304/
        README.md
        data.json
```

### Vulnerabilities
The `data.json` file contains the actual information about the vulnerability. It can optionally reference other files, like the vulnerability description (README.md) or patch files located in the same folder.

**Key attributes of the vulnerability data file:** ([full schema](test/fixtures/schema/vulnerability-data-schema.json))
* `title`: title of the vulnerability
* `credit`: list of credited reporters
* `description`: vulnerability description. Can reference an external file, i.e. `file://README.md`
* `semver`
  * `vulnerable`: vulnerable versions semver range
* `CVSSv3`: [CVSS](https://www.first.org/cvss/user-guide) v3 score
* `severity`: severity of the vulnerability
* `identifiers`
  * `CVE`: [CVE](https://cve.mitre.org/) ID
  * `CWE`: [CWE](https://cwe.mitre.org/) ID
* `patches`
  * `urls`: list of patch files or urls. Can point to a local file `file://fix.patch` or file url (i.e. `https://githib.com/author/repo/commit/hash.patch`)
  * `version`: applicable versions semver range


### Patches
[Unified GNU diff](https://en.wikipedia.org/wiki/Diff_utility#Unified_format) formatted patch files are used to make the minimal modifications required to fix the vulnerability.

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md)
