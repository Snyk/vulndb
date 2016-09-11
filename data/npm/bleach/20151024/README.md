## Overview
bleach 3.0 and earlier is vulnerable to [Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) when certain types of input are passed into the sanitize function.

`bleach` performs html sanitization, which has definite value from a security perspective. However, it does not control the length of the html it processes, and uses regular expressions to parse it. As a result, it is susceptible to a [Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) vulnerabilities, rendering an application unavailable if a long or complex input is passed in.

## References
- https://github.com/ecto/bleach/blob/master/lib/bleach.js#L29
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
