## Overview
[`node-forge`](https://www.npmjs.com/package/node-forge) is a JavaScript implementation of network transports, cryptography, ciphers, PKI, message digests, and various utilities.
Affected versions of the package are vulnerable to a Timing Attack due to unsafe HMAC comparison.
The HMAC algorithm produces a keyed message by pairing a hash function with a cryptographic key. Both the key and a message serve as input to this algorithm, while it outputs a fixed-length digest output which can be sent with the message. Anyone who knows the key can repeat the algorithm and compare their calculated HMAC with one they have received, to verify a message originated from someone with knowledge of the key and has not been tampered with.

The problem begins when trying to compare two HMACs.
This is the part of code that handles the comparison:

```js
if(byteArrayA.length != byteArrayB.length) { return false; }
for(int i = 0; i < byteArrayA.length; i++) {
  if(byteArrayA[i] != byteArrayB[i]) { return false; }
}
return true;
```
The issue is that the more bytes match in the two arrays, the more comparisons are formed and the longer it'll take to return a result. This may allow attackers to brute force their way into the servers.


## Remediation
Upgrade `node-forge` to version 0.6.33 or higher.

## References
- [Github Commit](https://github.com/digitalbazaar/forge/commit/17c6aaf2fa3bb0fc8756c561c541dd8e8127e1dd)
- [NCCGroup Blog](https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/february/double-hmac-verification/)
- [Nate Lawson's Blog](https://rdist.root.org/2010/07/19/exploiting-remote-timing-attacks/)
