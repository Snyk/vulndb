## Overview
[`react-native-meteor-oauth`](https://www.npmjs.com/package/react-native-meteor-oauth) is a library for Oauth2 login to a Meteor server in React Native.
The Oauth Random Token is generated using the cryptographically insecure `Math.random` which can produce predictable values and should not be used in security-sensitive context.

## Remediation
There is no fix version for `react-native-meteor-oauth`.

## References
- [GitHub Commit](https://github.com/tableflip/react-native-meteor-oauth/blob/a7eb738b74c469f5db20296b44b7cae4e2337435/src/meteor-oauth.js#L66)
