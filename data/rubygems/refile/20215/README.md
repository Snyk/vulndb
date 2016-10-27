## Oerview
refile Gem for Ruby contains a flaw that is triggered when input is not
sanitized when handling the 'remote_image_url' field in a form, where
'image' is the name of the attachment. This may allow a remote attacker
to execute arbitrary shell commands.


## Remediation
Upgrade to version `>= 0.5.4` or greater.

## References
- http://rubysec.com/advisories/OSVDB-120857
- https://groups.google.com/forum/#!topic/ruby-security-ann/VIfMO2LvzNs
