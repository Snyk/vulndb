## Oerview
rbovirt Gem for Ruby contains a flaw related to certificate validation.
The issue is due to the program failing to validate SSL certificates. This may
allow an attacker with access to network traffic (e.g. MiTM, DNS cache
poisoning) to spoof the SSL server via an arbitrary certificate that appears
valid. Such an attack would allow for the interception of sensitive traffic,
and potentially allow for the injection of content into the SSL stream.


## Remediation
Upgrade to version `>= 0.0.24` or greater.

## References
- http://rubysec.com/advisories/OSVDB-104080
- http://osvdb.org/show/osvdb/104080
