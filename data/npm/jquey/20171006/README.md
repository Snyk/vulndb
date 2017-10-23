## Overview
`jquey` is a malicious package that uses [typosquatting](http://incolumitas.com/2016/06/08/typosquatting-package-managers/) to bait unknowing users to install them.
Packages like this, which carry similar names to an original package, offer all the functionality of their original, but also include a code snippet that sends your SSH keys and bash profile to a remote server controlled by malicious operators when installing it.

This is especially dangerous in production runtime environments, where environment variables tend to consist of keys, passwords, tokens and other secrets.

## Remediation
Avoid usage of this package altogether.
