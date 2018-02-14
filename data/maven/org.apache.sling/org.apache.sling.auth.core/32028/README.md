## Overview
[`org.apache.sling:org.apache.sling.auth.core`](https://sling.apache.org/) is a framework for RESTful web-applications based on an extensible content tree.

A flaw in the org.apache.sling.auth.core.AuthUtil#isRedirectValid method in Apache Sling Authentication Service 1.4.0 allows an attacker, through the Sling login form, to trick a victim to send over their credentials.

## References
- [Apache Sling Mailing List](https://lists.apache.org/thread.html/182bed1dd6933824a81cc5f07639eeb813fbd8f2cc49d51b452ab621@%3Cdev.sling.apache.org%3E)
