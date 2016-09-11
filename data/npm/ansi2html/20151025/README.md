## Overview
`ansi2html` does not control the length of the input it processes, and uses regular expressions to parse it. As a result, it is susceptible to a [Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) vulnerabilities, rendering an application unavailable if a long or complex input is passed in.

## References
- https://github.com/agnoster/ansi2html/blob/master/lib/index.js#L52
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
