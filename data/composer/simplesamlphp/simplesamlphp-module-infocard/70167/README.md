# Overview
Affected versions of [`simplesamlphp/simplesamlphp-module-infocard`](https://packagist.org/packages/simplesamlphp/simplesamlphp-module-infocard) are vulnerable to Incorrect signature verification.

> The InfoCard SimpleSAMLphp module allows incorporates a series of libraries provided by the Zend Framework. As part of this third-party library, the class Zend_InfoCard_Xml_Security allows the verification of the XML digital signature of XML chunks with a given key. In particular, the validateXMLSignature() method receives an string containing an XML document and a key to verify it, and throws an exception in case there is any error, either caused by incorrect input or an invalid signature. This method uses the openssl_verify() function provided by the openssl PHP extension.

> The openssl_verify() function returns 1 when the signature was successfully verified, 0 if it failed to verify with the given key, and -1 in case an error occurs. PHP allows translating numerical values to boolean implicitly, with the following correspondences:
* 0 equals false.
* Non-zero equals true.
This means that an implicit conversion to boolean of the values returned by openssl_verify() will convert an error state, signaled by the value -1, to a successful verification of the signature (represented by the boolean true).

>The aforementioned method was performing an implicit conversion to boolean of the values returned by the openssl_verify() function. This means an error during signature verification is treated as a successful verification by the method.



## Remediation
Upgrade `simplesamlphp/simplesamlphp-module-infocard` to version 1.0.1 or higher.

## References
- [SimpleSaml Security Advosiry](https://simplesamlphp.org/security/201612-03)
