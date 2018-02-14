# Overview
Affected versions of [`simplesamlphp/simplesamlphp`](https://packagist.org/packages/simplesamlphp/simplesamlphp) are vulnerable to Incorrect signature verification.

> The SimpleSAML_XML_Validator class allows the verification of the XML digital signature of a SAML 1 message with a given key. In particular, the constructor of the class receives an XML node and a key to verify it, and throws an exception in case there is any error, either caused by incorrect input or an invalid signature. This method uses the verify() method from the RobRichards\XMLSecDSig class to verify the signature with the given key, which in turn will end up calling openssl_verify() depending on the signature algorithm used.

>The openssl_verify() function returns 1 when the signature was successfully verified, 0 if it failed to verify with the given key, and -1 in case an error occurs. PHP allows translating numerical values to boolean implicitly, with the following correspondences:
* 0 equals false.
* Non-zero equals true.
This means that an implicit conversion to boolean of the values returned by openssl_verify() will convert an error state, signaled by the value -1, to a successful verification of the signature (represented by the boolean true).
The aforementioned constructor was performing an implicit conversion to boolean of the values returned by the verify() method, which subsequently will return the same output as openssl_verify() under most circumstances. This means an error during signature verification is treated as a successful verification by the method.

## Remediation
Upgrade `simplesamlphp/simplesamlphp` to version 1.14.11 or higher.

## References
- [SimpleSaml Security Advosiry](https://simplesamlphp.org/security/201612-02)
