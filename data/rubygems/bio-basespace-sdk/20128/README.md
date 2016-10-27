## Overview
[`bio-basespace-sdk`](https://rubygems.org/gems/bio-basespace-sdk) is a Ruby based Software Development Kit to be used in the development of Apps and scripts for working with Illumina's BaseSpace cloud-computing solution for next-gen sequencing data analysis. 
Affected versions of this Gem are vulnerable to Command Line API Key Disclosure Attacks due to the API client code passing the API_KEY to a curl command. This may allow a local attacker to gain access to API key information by monitoring the process table.

## References
- https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-7111
