## Overview
`electron-packager` is a command line tool that lets you package and distribute your Electron app with OS-specific bundles (.app, .exe etc) via JS or CLI.

Versions `5.2.1-6.0.2` have the `--strict-ssl` command line option default to false (causing strict-ssl to not be enabled). This could allow an attacker to execute a SSL Man In The Middle attack and deliver a malicious electron version that also gets cached in `~/.electron` folder. 

## Remediation
Upgrade `electron-packager` to version 7.0.0 or higher.
If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/documentation/#wizard) to patch this vulnerability.

Delete the electron-download cache folder, by default named `.electron`, located in your home folder.

## References
- https://github.com/electron-userland/electron-packager/issues/333

