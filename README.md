[![logo](misc/snyk-logo-incl-word.png)](https://snyk.io)


![npm](misc/npm-logo.png)     ![rubygems](misc/rubygems-logo.png)  ![maven](misc/maven-logo.png)


# Snyk Vulnerability Database

This is the vulnerability database used by [Snyk](https://github.com/Snyk/snyk), a tool that helps you find and fix known vulnerabilities in your dependencies, both ad hoc and as part of your CI (Build) system.


This github repository is synced once a month, and does not contain the most up to date vulnerability information. Please refer to [Snyk's Vulnerability Database](https://snyk.io/vuln/) for up to date information.

## Structure
Under the `data` folder you will find a list package managers. The folder structure depends on the package manager.
##### npm
Under the `npm` folder, there will be a list of list of folders that match the names of vulnerable [`npm`](https://www.npmjs.com/) packages, then a `YYYYMMDD` folder containing the data files.
For example, the latest Denial of Service vulnerability in the `ms` package will have the following path `npm/ms/20170412/`.

##### rubygems
Under the `rubygems` folder, there will be a list of folders that match the names of vulnerable [`rubygems`](https://rubygems.org/), then a numeric `2XXXX` folder containing the data files.
For example, `rubygems/bycrypt/20009/`.

##### maven
Under the `rubygems` folder, there will be a list of folders that match the group ids, and under them a list of artifact ids found in  [`maven central`](http://search.maven.org/), then a numeric `3XXXX` folder containing the data files.
For example, `maven/org.springframework/spring-core/31326/`.



```
data/
  maven/
    org.springframework/
      spring-core/
        31326/
          README.md
          data.json
      spring-web/
        31331/
          README.md
          data.json
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
  rubygems/
    bycrypt/
      20009/
        README.md
        data.json    
```

### Vulnerabilities
The `data.json` file contains the raw data about the vulnerability. It can optionally reference other files, like the vulnerability description (README.md) or patch files located in the same folder.

**Key attributes of the vulnerability data file:**
* `title`: title of the vulnerability
* `credit`: list of credited reporters
* `packageName`: name of the specific package
* `packageManager`: name of the package manager
* `language`: the language the package is written in
* `id`: the unique `snyk` id
* `description`: vulnerability description. Can reference an external file, i.e. `file://README.md`
* `semver`
  * `vulnerable`: vulnerable versions semver range
  * `unaffected`: the range of safe versions to use.
* `CVSSv3`: [CVSS](https://www.first.org/cvss/user-guide) v3 score
* `severity`: severity of the vulnerability
* `identifiers`
  * `CVE`: [CVE](https://cve.mitre.org/) ID
  * `CWE`: [CWE](https://cwe.mitre.org/) ID
* `patches` (For npm only)
  * `urls`: list of patch files or urls. Can point to a local file `file://fix.patch` or file url (i.e. `https://githib.com/author/repo/commit/hash.patch`)
  * `version`: applicable versions semver range


### Patches
[Unified GNU diff](https://en.wikipedia.org/wiki/Diff_utility#Unified_format) formatted patch files are used to make the minimal modifications required to fix the vulnerability.

### Contributing
See [CONTRIBUTING](CONTRIBUTING.md)
