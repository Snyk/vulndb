[`Microsoft.IdentityModel.Tokens`](https://www.nuget.org/packages/Microsoft.IdentityModel.Tokens) Includes types that provide support for cryptographic operations.

Affected versions of this package are vulnerable to Privilege Escalation.
A security vulnerability in the public version of Microsoft.IdentityModel.Tokens 5.1.0 where tokens signed with symmetric keys could be vulnerable to tampering.

## Remediation
Upgrade `Microsoft.IdentityModel.Tokens` to version 5.1.1 or higher.

## References
- [Microsoft Security Advisory](https://technet.microsoft.com/library/security/3214296)
