## Overview
[PDFKit](https://rubygems.org/gems/pdfkit) is a gem that uses wkhtmltopdf to create PDFs using HTML.
Affected versions of PDFKit contain a flaw that is due to the program failing to properly validate input during the handling of parameters when generating PDF files. This may allow a remote attacker to potentially execute arbitrary code via the pdfkit generation options.

## References
- http://rubysec.com/advisories/CVE-2013-1607
