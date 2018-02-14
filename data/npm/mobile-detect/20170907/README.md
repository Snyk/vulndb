## Overview
[`mobile-detect`](https://www.npmjs.com/package/mobile-detect) is a loose port of PHP's Mobile-Detect to JavaScript.

Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) via the user agent parser. It used a regular expression (`/Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\b001DL\b|\b101DL\b|\bGS01\b/i
`) in order to parse user agents. This can cause a very moderate impact of about 10 seconds matching time for data 50k characters long.

This vulnerability is related to [SNYK-PHP-MOBILEDETECTMOBILEDETECTLIB-70384](https://snyk.io/vuln/SNYK-PHP-MOBILEDETECTMOBILEDETECTLIB-70384).

## Details
Denial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its original and legitimate users. There are many types of DoS attacks, ranging from trying to clog the network pipes to the system by generating a large volume of traffic from many machines (a Distributed Denial of Service - DDoS - attack) to sending crafted requests that cause a system to crash or take a disproportional amount of time to process.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Regular expressions are incredibly powerful, but they aren't very intuitive and can ultimately end up making it easy for attackers to take your site down.

Let’s take the following regular expression as an example:
```js
regex = /A(B|C+)+D/
```

This regular expression accomplishes the following:
- `A` The string must start with the letter 'A'
- `(B|C+)+` The string must then follow the letter A with either the letter 'B' or some number of occurrences of the letter 'C' (the `+` matches one or more times). The `+` at the end of this section states that we can look for one or more matches of this section.
- `D` Finally, we ensure this section of the string ends with a 'D'

The expression would match inputs such as `ABBD`, `ABCCCCD`, `ABCBCCCD` and `ACCCCCD`

It most cases, it doesn't take very long for a regex engine to find a match:

```bash
$ time node -e '/A(B|C+)+D/.test("ACCCCCCCCCCCCCCCCCCCCCCCCCCCCD")'
0.04s user 0.01s system 95% cpu 0.052 total

$ time node -e '/A(B|C+)+D/.test("ACCCCCCCCCCCCCCCCCCCCCCCCCCCCX")'
1.79s user 0.02s system 99% cpu 1.812 total
```

The entire process of testing it against a 30 characters long string takes around ~52ms. But when given an invalid string, it takes nearly two seconds to complete the test, over ten times as long as it took to test a valid string. The dramatic difference is due to the way regular expressions get evaluated.

Most Regex engines will work very similarly (with minor differences). The engine will match the first possible way to accept the current character and proceed to the next one. If it then fails to match the next one, it will backtrack and see if there was another way to digest the previous character. If it goes too far down the rabbit hole only to find out the string doesn’t match in the end, and if many characters have multiple valid regex paths, the number of backtracking steps can become very large, resulting in what is known as _catastrophic backtracking_.

Let's look at how our expression runs into this problem, using a shorter string: "ACCCX". While it seems fairly straightforward, there are still four different ways that the engine could match those three C's:
1. CCC
2. CC+C
3. C+CC
4. C+C+C.

The engine has to try each of those combinations to see if any of them potentially match against the expression. When you combine that with the other steps the engine must take, we can use [RegEx 101 debugger](https://regex101.com/debugger) to see the engine has to take a total of 38 steps before it can determine the string doesn't match.

From there, the number of steps the engine must use to validate a string just continues to grow.

| String | Number of C's | Number of steps |
| -------|-------------:| -----:|
| ACCCX | 3 | 38
| ACCCCX | 4 | 71
| ACCCCCX | 5 | 136
| ACCCCCCCCCCCCCCX | 14 | 65,553


By the time the string includes 14 C's, the engine has to take over 65,000 steps just to see if the string is valid. These extreme situations can cause them to work very slowly (exponentially related to input size, as shown above), allowing an attacker to exploit this and can cause the service to excessively consume CPU, resulting in a Denial of Service.



You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `mobile-detect` to version 1.4.0 or higher.

## References
- [GitHub Issue](https://github.com/hgoebl/mobile-detect.js/issues/67)
- [GitHub Commit](https://github.com/hgoebl/mobile-detect.js/commit/7222f6e75cf8cd90e1dc53e445716203eaf79d8a)
