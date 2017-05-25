## Overview
[`org.mindrot:jbcrypt`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jbcrypt%22)
Integer overflow in the `crypt_raw` method in the `key-stretching` implementation in jBCrypt before 0.4 makes it easier for remote attackers to determine cleartext values of password hashes via a brute-force attack against hashes associated with the maximum exponent.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0886)
