# Overview
Affected versions of [`simplesamlphp/saml2`](https://packagist.org/packages/simplesamlphp/saml2) are vulnerable to Incorrect signature verification.

The validateSignature method in the SAML2\Utils class in SimpleSAMLphp before 1.14.10 and simplesamlphp/saml2 library before 1.9.1, 1.10.x before 1.10.3, and 2.x before 2.3.3 allows remote attackers to spoof SAML responses or possibly cause a denial of service (memory consumption) by leveraging improper conversion of return values to boolean.

> The SAML2\Utils class offers a set of methods that allow to verify an XML digital signature against a given key. In particular, the validateSignature() method receives a signature and a key to verify it, and throws an exception in case there is any error, either caused by incorrect input or an invalid signature. This method uses the verify() method from the RobRichards\XMLSecDSig class to verify the signature with the given key, which in turn will end up calling openssl_verify() depending on the signature algorithm used.

> The openssl_verify() function returns 1 when the signature was successfully verified, 0 if it failed to verify with the given key, and -1 in case an error occurs. PHP allows translating numerical values to boolean implicitly, with the following correspondences:
* 0 equals false.
* Non-zero equals true.
This means that an implicit conversion to boolean of the values returned by openssl_verify() will convert an error state, signaled by the value -1, to a successful verification of the signature (represented by the boolean true).

> The aforementioned validateSignature() method was performing an implicit conversion to boolean of the values returned by the verify() method, which subsequently will return the same output as openssl_verify() under most circumstances. This means an error during signature verification is treated as a successful verification by the method.

## Remediation
Upgrade `simplesamlphp/saml2` to version 1.8.1, 1.10.3 or higher.

## References
- [SimpleSaml Security Advosiry](https://simplesamlphp.org/security/201612-01)
