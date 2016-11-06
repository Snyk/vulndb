## Overview
[`rbovirt`](https://rubygems.org/gems/rbovirt) is a Ruby client for oVirt REST API.
Affected versions of this gem are vulnerable to authentication bypass due to failing to validate SSL certificates. This may allow an attacker with access to network traffic (e.g. MiTM, DNS cache poisoning) to spoof the SSL server via an arbitrary certificate that appears valid. Such an attack would allow for the interception of sensitive traffic, and potentially allow for the injection of content into the SSL stream.

## References
- http://rubysec.com/advisories/CVE-2014-0036
