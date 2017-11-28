## Overview
[`com.typesafe.akka:akka-http-core_2.12`](https://akka.typesafe.com) modules implement a full server and client-side HTTP stack on top of akka-actor and akka-stream.

Affected versions of the package are vulnerable to Denial of Service (DoS). An attacker may sent a request that contains an `Accept` header with an unsupported media range beginning with a wildcard. This will cause a stack overflow during negotiation of the content type. Normally, stack overflows are treated as fatal errors, so that the JVM process will shut itself down immediately.

## Remediation
Upgrade `akka-http-core_2.12` to version 10.0.6 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000118)
- [Akka Security](https://doc.akka.io/docs/akka-http/10.0.6/security/2017-05-03-illegal-media-range-in-accept-header-causes-stackoverflowerror.html)
