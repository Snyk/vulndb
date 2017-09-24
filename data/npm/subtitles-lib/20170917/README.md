## Overview
`subtitles-lib`  is a malicious package that was used to collect download metrics beyond what npm provides, and sent them to google analytics or piwik. This can cause a privacy concern amongst users.

This is especially dangerous in production runtime environments, where environment variables tend to consist of keys, passwords, tokens and other secrets.

Example:
```json
{
  "name": "npm_scripts_test_metrics",
  "scripts": {
    "preinstall": "curl 'http://google-analytics.com/collect?v=1&t=event&tid=....'",
    "postinstall": "curl 'http://google-analytics.com/collect?v=1&t=event&tid=....'"
  }
},
{
  "name": "subtitles-lib",
  "scripts": {
    "postinstall": "bash -c 'curl \"http://avighier.piwikpro.com/piwik.php?idsite=3&rec=1&action_name=$HOSTNAME\"'"
  }
}
```

The list of packages and their scripts are:
```
npm_scripts_test_metrics
subtitles-lib
ikst
botbait
mktmpio
anarchy
```


## Remediation
Avoid usage of this package altogether.

## References
- [Hunting Malicious packages published on npm](https://duo.com/blog/hunting-malicious-npm-packages/)
