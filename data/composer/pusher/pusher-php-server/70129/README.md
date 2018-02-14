# Overview
Affected versions of [`pusher/pusher-php-server`](https://packagist.org/packages/pusher/pusher-php-server) are vulnerable to Exploit in the private channel authentication.

`pusher` provides private channels with an authentication mechanism meant to restrict who can subscribe to these channels. End-users request a token from a special authentication endpoint, in order to join a particular channel. Due to a lack of validation in the authentication endpoint, a malicious end-user could submit a malformed `socket_id` field and have the customer unknowingly sign a string which grants access to the private channel even though the end-user appears to be requesting access to different private channel. In this way, a malicious end-user with permission to subscribe to one private channel is able to fake permission for any private channel owned by the same customer.

## Remediation
Upgrade `pusher/pusher-php-server` to version 2.2.1 or higher.

## References
- [Pusher Blog](https://blog.pusher.com/update-on-security/)
