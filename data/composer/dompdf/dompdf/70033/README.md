# Overview
Affected versions of [`dompdf/dompdf`](https://packagist.org/packages/dompdf/dompdf) are vulnerable to Arbitrary File Read.

dompdf.php in dompdf before 0.6.1, when DOMPDF_ENABLE_PHP is enabled, allows context-dependent attackers to bypass chroot protections and read arbitrary files via a PHP protocol and wrappers in the input_file parameter, as demonstrated by a php://filter/read=convert.base64-encode/resource in the input_file parameter.


## Remediation
Upgrade `dompdf/dompdf` to version 0.6.1 or higher.

## References
- [Portcullis Security Advisory](https://www.portcullis-security.com/security-research-and-downloads/security-advisories/cve-2014-2383/)
