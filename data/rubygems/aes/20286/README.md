## Overview
[`aes`](https://rubygems.org/gems/aes) is an AES encrypt/decrypt gem built on top of OpenSSL.
Affected versions of this gem do not properly encrypt messages due to using the ruby `hex` function. `hex` converts hexadecimal strings into an integer and if it fails, zero is returned.

```rb
'10'.hex  #=> 16
'ff'.hex  #=> 255
# zero is returned on error:
'foobar'.hex  #=> 0
```

Any string that doesn't have a hexadecimal sequence (e.g. `ff` or `13`) will be transformed into an array of 32 zeros, making it possible to decrypt messages with almost any key.

## Remediation  
As of Jan. 18th there is still no fixed version, but a PR was created.

## References
- [Kacper Walanus' Blog](https://blog.elpassion.com/simple-and-terrifying-encryption-story-c1f1d6707c07#.u8e279u80)
- [Kacper Walanus' Gist](https://gist.github.com/kv109/42289aa65f81e819910005f4773215a1)
- [Github Issue](https://github.com/chicks/aes/issues/5)
- [Github PR](https://github.com/chicks/aes/pull/7)
