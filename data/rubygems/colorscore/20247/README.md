## Oerview
The contents of the `image_path`, `colors`, and `depth` variables generated
from possibly user-supplied input are passed directly to the shell via
`convert ...`.

If a user supplies a value that includes shell metacharacters such as ';', an
attacker may be able to execute shell commands on the remote system as the
user id of the Ruby process.

To resolve this issue, the aforementioned variables (especially `image_path`)
must be sanitized for shell metacharacters.

Currently, no fix for this issue exists.


## References
- http://rubysec.com/advisories/CVE-2015-7541
- http://seclists.org/oss-sec/2016/q1/17
