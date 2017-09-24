## Overview
`pwd` is a one of 10 malicious packages that use [typosquatting](http://incolumitas.com/2016/06/08/typosquatting-package-managers/) to bait unknowing users to install them.
These packages, which carry similar names to an original package, offer all the functionality of their original, but also include malicious code that collected information on infected hosts, such as the username of the user who installed the package, and the user's computer hostname. It is also possible that the packages collected SSH key information.

The collected data, which looked like `Y:urllib-1.21.1 admin testmachine`, was uploaded to a Chinese IP address at `121.42.217.44:8080`.

This is especially dangerous in production runtime environments, where environment variables tend to consist of keys, passwords, tokens and other secrets.

On September 15th, 2017 pypi deprecated all malicious typosquatting libraries from this list.

The full list of packages are:
```
– acqusition (uploaded 2017-06-03 01:58:01, impersonates acquisition)
– apidev-coop (uploaded 2017-06-03 05:16:08, impersonates apidev-coop_cms)
– bzip (uploaded 2017-06-04 07:08:05, impersonates bz2file)
– crypt (uploaded 2017-06-03 08:03:14, impersonates crypto)
– django-server (uploaded 2017-06-02 08:22:23, impersonates django-server-guardian-api)
– pwd (uploaded 2017-06-02 13:12:33, impersonates pwdhash)
– setup-tools (uploaded 2017-06-02 08:54:44, impersonates setuptools)
– telnet (uploaded 2017-06-02 15:35:05, impersonates telnetsrvlib)
– urlib3 (uploaded 2017-06-02 07:09:29, impersonates urllib3)
– urllib (uploaded 2017-06-02 07:03:37, impersonates urllib3)
```

## Remediation
Avoid usage of this package altogether.

## References
- [Malicious packages published on pip](https://www.bleepingcomputer.com/news/security/ten-malicious-libraries-found-on-pypi-python-package-index/)
- [Typosquatting programming language package managers](http://incolumitas.com/2016/06/08/typosquatting-package-managers/)
