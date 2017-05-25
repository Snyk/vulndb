## Overview
[`org.dashbuilder:dashbuilder-dataset-sql`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22dashbuilder-dataset-sql%22)
SQL injection vulnerability in the getStringParameterSQL method in main/java/org/dashbuilder/dataprovider/sql/dialect/DefaultDialect.java in Dashbuilder before 0.6.0.Beta1 allows remote attackers to execute arbitrary SQL commands via a data set lookup filter in the (1) Data Set Authoring or (2) Displayer editor UI.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-4999)