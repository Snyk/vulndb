## Overview

Since the sanitize-html module trusts 'text' coming from htmlparser2, and outputs it without further escaping (because htmlparser2 does not decode entities in text before delivering it), this results in an XSS attack vector if sanitize-html ignores the img tag (according to user-configured filter rules) but passes the text intact, as it must do to keep any text in documents.
