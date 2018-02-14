# Overview
Affected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to Insufficient Session Validation.

`Zend\Session` session validators do not work as expected if set prior to the start of a session.

The implication is that subsequent calls to `Zend\Session\SessionManager#start()` (in later requests, assuming a session was created) will not have any validator metadata attached, which causes any validator metadata to be re-built from scratch, thus marking the session as valid.

An attacker is thus able to simply ignore session validators such as `RemoteAddr` or `HttpUserAgent`, since the "signature" that these validators check against is not being stored in the session.

## Remediation
Upgrade `zendframework/zendframework` to version 2.3.4, 2.2.9 or higher.

## References
- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2015-01)
