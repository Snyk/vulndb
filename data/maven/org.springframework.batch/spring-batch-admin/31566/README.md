## Overview
[`org.springframework.batch:spring-batch-admin`](https://batch.springframework.org) is an web application and API for managing and monitoring Spring Batch jobs.

Affected versions of the package are vulnerable to Cross-Site Scripting (XSS) attacks.
Stored Cross-site scripting (XSS) vulnerability in Spring Batch Admin before 1.3.0 allows remote authenticated users to inject arbitrary JavaScript or HTML via the file upload functionality.

## Details
When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `org.springframework.batch:spring-batch-admin` to version 1.3.0.RELEASE or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12882)
- [Securityfocus](http://www.securityfocus.com/bid/100410/info)
