## Overview
[`org.apache.wicket:wicket-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wicket-core%22)
Affected versions of the package are vulnerable to Inadequate Encryption Strength. With Wicket's default security settings the usage of CryptoMapper to encrypt/obfuscate pages' urls is not strong enough. It is possible to predict the encrypted version of an url based on the previous history.

## References
- [Apache Security Advisory](https://mail-archives.apache.org/mod_mbox/wicket-users/201502.mbox/%3CCAMomwMpLPDYezc=iFofm1R1Uq37vUFJ8VC-_ex5SU8-HAKBoRw@mail.gmail.com%3E)
