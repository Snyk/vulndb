/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() {
},
yy: {},
symbols_: {"orderly_schema":2,"unnamed_entry":3,";":4,"named_entries":5,"named_entry":6,"unnamed_entries":7,"definition_prefix":8,"property_name":9,"definition_suffix":10,"string_prefix":11,"string_suffix":12,"INTEGER":13,"optional_range":14,"NUMBER":15,"BOOLEAN":16,"NULL":17,"ANY":18,"ARRAY":19,"{":20,"}":21,"optional_additional_marker":22,"[":23,"]":24,"OBJECT":25,"UNION":26,"STRING":27,"optional_perl_regex":28,"optional_enum_values":29,"optional_default_value":30,"optional_requires":31,"optional_optional_marker":32,"optional_extra_properties":33,"csv_property_names":34,",":35,"`":36,"JSONObject":37,"<":38,">":39,"?":40,"*":41,"JSONArray":42,"=":43,"JSONValue":44,"JSONNumber":45,"JSONString":46,"PROPERTY":47,"REGEX":48,"STRING_LIT":49,"NUMBER_LIT":50,"JSONNullLiteral":51,"JSONBooleanLiteral":52,"TRUE":53,"FALSE":54,"JSONText":55,"JSONMemberList":56,"JSONMember":57,":":58,"JSONElementList":59,"$accept":0,"$end":1},
terminals_: {"4":";","13":"INTEGER","15":"NUMBER","16":"BOOLEAN","17":"NULL","18":"ANY","19":"ARRAY","20":"{","21":"}","23":"[","24":"]","25":"OBJECT","26":"UNION","27":"STRING","35":",","36":"`","38":"<","39":">","40":"?","41":"*","43":"=","47":"PROPERTY","48":"REGEX","49":"STRING_LIT","50":"NUMBER_LIT","53":"TRUE","54":"FALSE","58":":"},
productions_: [0,[2,2],[2,1],[5,3],[5,1],[5,0],[7,3],[7,1],[7,0],[6,3],[6,3],[3,2],[3,2],[8,2],[8,2],[8,1],[8,1],[8,1],[8,6],[8,5],[8,5],[8,4],[11,2],[12,2],[10,5],[34,3],[34,1],[33,3],[33,0],[31,3],[31,0],[32,1],[32,0],[22,1],[22,0],[29,1],[29,0],[30,2],[30,0],[14,5],[14,4],[14,4],[14,3],[14,0],[9,1],[9,1],[28,1],[28,0],[46,1],[45,1],[51,1],[52,1],[52,1],[55,1],[44,1],[44,1],[44,1],[44,1],[44,1],[44,1],[37,2],[37,3],[57,3],[56,1],[56,3],[42,2],[42,3],[59,1],[59,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy) {
    var Type = yy.Type;
    var $$ = arguments[5], $0 = arguments[5].length;
    switch (arguments[4]) {
      case 1:
        return $$[$0 - 2 + 1 - 1];
        break;
      case 2:
        return $$[$0 - 1 + 1 - 1];
        break;
      case 3:
        this.$ = $$[$0 - 3 + 3 - 1];
        this.$.unshift($$[$0 - 3 + 1 - 1]);
        break;
      case 4:
        this.$ = [$$[$0 - 1 + 1 - 1]];
        break;
      case 5:
        this.$ = [];
        break;
      case 6:
        this.$ = $$[$0 - 3 + 3 - 1];
        $$[$0 - 3 + 3 - 1].unshift($$[$0 - 3 + 1 - 1]);
        break;
      case 7:
        this.$ = [$$[$0 - 1 + 1 - 1]];
        break;
      case 8:
        this.$ = [];
        break;
      case 9:
        this.$ = [$$[$0 - 3 + 2 - 1], $$[$0 - 3 + 1 - 1]];
        Type.addOptionals($$[$0 - 3 + 1 - 1], $$[$0 - 3 + 3 - 1]);
        break;
      case 10:
        this.$ = [$$[$0 - 3 + 2 - 1], $$[$0 - 3 + 1 - 1]];
        Type.addOptionals($$[$0 - 3 + 1 - 1], $$[$0 - 3 + 3 - 1]);
        break;
      case 11:
        this.$ = $$[$0 - 2 + 1 - 1];
        Type.addOptionals(this.$, $$[$0 - 2 + 2 - 1]);
        break;
      case 12:
        this.$ = $$[$0 - 2 + 1 - 1];
        Type.addOptionals(this.$, $$[$0 - 2 + 2 - 1]);
        break;
      case 13:
        this.$ = new Type("integer", $$[$0 - 2 + 2 - 1]);
        break;
      case 14:
        this.$ = new Type("number", $$[$0 - 2 + 2 - 1]);
        break;
      case 15:
        this.$ = new Type("boolean");
        break;
      case 16:
        this.$ = new Type("null");
        break;
      case 17:
        this.$ = new Type("any");
        break;
      case 18:
        this.$ = new Type("array", $$[$0 - 6 + 6 - 1], $$[$0 - 6 + 3 - 1], $$[$0 - 6 + 5 - 1]);
        break;
      case 19:
        this.$ = new Type("array", $$[$0 - 5 + 5 - 1], $$[$0 - 5 + 3 - 1]);
        break;
      case 20:
        this.$ = new Type("object", null, $$[$0 - 5 + 3 - 1], $$[$0 - 5 + 5 - 1]);
        break;
      case 21:
        this.$ = new Type($$[$0 - 4 + 3 - 1]);
        break;
      case 22:
        this.$ = new Type("string", $$[$0 - 2 + 2 - 1]);
        break;
      case 23:
        this.$ = $$[$0 - 2 + 2 - 1];
        this.$.pattern = $$[$0 - 2 + 1 - 1];
        break;
      case 24:
        this.$ = {enums: $$[$0 - 5 + 1 - 1], defaultv: $$[$0 - 5 + 2 - 1], requires: $$[$0 - 5 + 3 - 1], optional: $$[$0 - 5 + 4 - 1], extras: $$[$0 - 5 + 5 - 1]};
        break;
      case 25:
        this.$ = $$[$0 - 3 + 1 - 1];
        this.$.push($$[$0 - 3 + 3 - 1]);
        break;
      case 26:
        this.$ = [$$[$0 - 1 + 1 - 1]];
        break;
      case 27:
        this.$ = $$[$0 - 3 + 2 - 1];
        break;
      case 28:
        this.$ = null;
        break;
      case 29:
        this.$ = $$[$0 - 3 + 2 - 1];
        break;
      case 30:
        this.$ = null;
        break;
      case 31:
        this.$ = true;
        break;
      case 32:
        this.$ = null;
        break;
      case 33:
        this.$ = true;
        break;
      case 34:
        this.$ = null;
        break;
      case 35:
        this.$ = $$[$0 - 1 + 1 - 1];
        break;
      case 36:
        this.$ = null;
        break;
      case 37:
        this.$ = $$[$0 - 2 + 2 - 1];
        break;
      case 38:
        this.$ = yy.NOVALUE;
        break;
      case 39:
        this.$ = [$$[$0 - 5 + 2 - 1], $$[$0 - 5 + 4 - 1]];
        break;
      case 40:
        this.$ = [$$[$0 - 4 + 2 - 1], null];
        break;
      case 41:
        this.$ = [null, $$[$0 - 4 + 3 - 1]];
        break;
      case 42:
        this.$ = null;
        break;
      case 43:
        this.$ = null;
        break;
      case 44:
        this.$ = $$[$0 - 1 + 1 - 1];
        break;
      case 45:
        this.$ = yytext;
        break;
      case 46:
        this.$ = yytext.substr(1, yytext.length - 2);
        break;
      case 47:
        this.$ = null;
        break;
      case 48:
        this.$ = yytext;
        break;
      case 49:
        this.$ = Number(yytext);
        break;
      case 50:
        this.$ = null;
        break;
      case 51:
        this.$ = true;
        break;
      case 52:
        this.$ = false;
        break;
      case 53:
        return this.$ = $$[$0 - 1 + 1 - 1];
        break;
      case 54:
        this.$ = $$[$0 - 1 + 1 - 1];
        break;
      case 55:
        this.$ = $$[$0 - 1 + 1 - 1];
        break;
      case 56:
        this.$ = $$[$0 - 1 + 1 - 1];
        break;
      case 57:
        this.$ = $$[$0 - 1 + 1 - 1];
        break;
      case 58:
        this.$ = $$[$0 - 1 + 1 - 1];
        break;
      case 59:
        this.$ = $$[$0 - 1 + 1 - 1];
        break;
      case 60:
        this.$ = {};
        break;
      case 61:
        this.$ = $$[$0 - 3 + 2 - 1];
        break;
      case 62:
        this.$ = [$$[$0 - 3 + 1 - 1], $$[$0 - 3 + 3 - 1]];
        break;
      case 63:
        this.$ = {};
        this.$[$$[$0 - 1 + 1 - 1][0]] = $$[$0 - 1 + 1 - 1][1];
        break;
      case 64:
        this.$ = $$[$0 - 3 + 1 - 1];
        $$[$0 - 3 + 1 - 1][$$[$0 - 3 + 3 - 1][0]] = $$[$0 - 3 + 3 - 1][1];
        break;
      case 65:
        this.$ = [];
        break;
      case 66:
        this.$ = $$[$0 - 3 + 2 - 1];
        break;
      case 67:
        this.$ = [$$[$0 - 1 + 1 - 1]];
        break;
      case 68:
        this.$ = $$[$0 - 3 + 1 - 1];
        $$[$0 - 3 + 1 - 1].push($$[$0 - 3 + 3 - 1]);
        break;
      default:;
    }
},
table: [{"2":1,"3":2,"8":3,"11":4,"13":[1,5],"15":[1,6],"16":[1,7],"17":[1,8],"18":[1,9],"19":[1,10],"25":[1,11],"26":[1,12],"27":[1,13]},{"1":[3]},{"4":[1,14],"1":[2,2]},{"10":15,"29":16,"42":17,"23":[1,18],"4":[2,36],"1":[2,36],"36":[2,36],"40":[2,36],"38":[2,36],"43":[2,36],"21":[2,36],"24":[2,36]},{"12":19,"28":20,"48":[1,21],"4":[2,47],"1":[2,47],"36":[2,47],"40":[2,47],"38":[2,47],"43":[2,47],"23":[2,47],"21":[2,47],"24":[2,47]},{"14":22,"20":[1,23],"23":[2,43],"43":[2,43],"38":[2,43],"40":[2,43],"36":[2,43],"4":[2,43],"1":[2,43],"21":[2,43],"24":[2,43],"47":[2,43],"49":[2,43]},{"14":24,"20":[1,23],"23":[2,43],"43":[2,43],"38":[2,43],"40":[2,43],"36":[2,43],"4":[2,43],"1":[2,43],"21":[2,43],"24":[2,43],"47":[2,43],"49":[2,43]},{"1":[2,15],"4":[2,15],"36":[2,15],"40":[2,15],"38":[2,15],"43":[2,15],"23":[2,15],"21":[2,15],"24":[2,15],"49":[2,15],"47":[2,15]},{"1":[2,16],"4":[2,16],"36":[2,16],"40":[2,16],"38":[2,16],"43":[2,16],"23":[2,16],"21":[2,16],"24":[2,16],"49":[2,16],"47":[2,16]},{"1":[2,17],"4":[2,17],"36":[2,17],"40":[2,17],"38":[2,17],"43":[2,17],"23":[2,17],"21":[2,17],"24":[2,17],"49":[2,17],"47":[2,17]},{"20":[1,25],"23":[1,26]},{"20":[1,27]},{"20":[1,28]},{"14":29,"20":[1,23],"48":[2,43],"23":[2,43],"43":[2,43],"38":[2,43],"40":[2,43],"36":[2,43],"4":[2,43],"1":[2,43],"21":[2,43],"24":[2,43],"47":[2,43],"49":[2,43]},{"1":[2,1]},{"4":[2,11],"1":[2,11],"21":[2,11],"24":[2,11]},{"30":30,"43":[1,31],"4":[2,38],"1":[2,38],"36":[2,38],"40":[2,38],"38":[2,38],"21":[2,38],"24":[2,38]},{"4":[2,35],"1":[2,35],"36":[2,35],"40":[2,35],"38":[2,35],"43":[2,35],"21":[2,35],"24":[2,35]},{"24":[1,32],"59":33,"44":34,"51":35,"52":36,"46":37,"45":38,"37":39,"42":40,"17":[1,41],"53":[1,42],"54":[1,43],"49":[1,44],"50":[1,45],"20":[1,46],"23":[1,18]},{"4":[2,12],"1":[2,12],"21":[2,12],"24":[2,12]},{"10":47,"29":16,"42":17,"23":[1,18],"1":[2,36],"4":[2,36],"36":[2,36],"40":[2,36],"38":[2,36],"43":[2,36],"21":[2,36],"24":[2,36]},{"4":[2,46],"1":[2,46],"36":[2,46],"40":[2,46],"38":[2,46],"43":[2,46],"23":[2,46],"21":[2,46],"24":[2,46]},{"1":[2,13],"4":[2,13],"36":[2,13],"40":[2,13],"38":[2,13],"43":[2,13],"23":[2,13],"21":[2,13],"24":[2,13],"49":[2,13],"47":[2,13]},{"45":48,"35":[1,49],"50":[1,45]},{"1":[2,14],"4":[2,14],"36":[2,14],"40":[2,14],"38":[2,14],"43":[2,14],"23":[2,14],"21":[2,14],"24":[2,14],"49":[2,14],"47":[2,14]},{"7":50,"3":51,"8":3,"11":4,"13":[1,5],"15":[1,6],"16":[1,7],"17":[1,8],"18":[1,9],"19":[1,10],"25":[1,11],"26":[1,12],"27":[1,13],"21":[2,8]},{"3":52,"8":3,"11":4,"13":[1,5],"15":[1,6],"16":[1,7],"17":[1,8],"18":[1,9],"19":[1,10],"25":[1,11],"26":[1,12],"27":[1,13]},{"5":53,"6":54,"8":55,"11":56,"13":[1,5],"15":[1,6],"16":[1,7],"17":[1,8],"18":[1,9],"19":[1,10],"25":[1,11],"26":[1,12],"27":[1,13],"21":[2,5]},{"7":57,"3":51,"8":3,"11":4,"13":[1,5],"15":[1,6],"16":[1,7],"17":[1,8],"18":[1,9],"19":[1,10],"25":[1,11],"26":[1,12],"27":[1,13],"21":[2,8]},{"1":[2,22],"4":[2,22],"36":[2,22],"40":[2,22],"38":[2,22],"43":[2,22],"23":[2,22],"48":[2,22],"21":[2,22],"24":[2,22],"49":[2,22],"47":[2,22]},{"31":58,"38":[1,59],"4":[2,30],"1":[2,30],"36":[2,30],"40":[2,30],"21":[2,30],"24":[2,30]},{"44":60,"51":35,"52":36,"46":37,"45":38,"37":39,"42":40,"17":[1,41],"53":[1,42],"54":[1,43],"49":[1,44],"50":[1,45],"20":[1,46],"23":[1,18]},{"43":[2,65],"38":[2,65],"40":[2,65],"36":[2,65],"1":[2,65],"4":[2,65],"21":[2,65],"24":[2,65],"35":[2,65]},{"24":[1,61],"35":[1,62]},{"24":[2,67],"35":[2,67]},{"24":[2,54],"35":[2,54],"38":[2,54],"40":[2,54],"36":[2,54],"1":[2,54],"4":[2,54],"21":[2,54]},{"24":[2,55],"35":[2,55],"38":[2,55],"40":[2,55],"36":[2,55],"1":[2,55],"4":[2,55],"21":[2,55]},{"24":[2,56],"35":[2,56],"38":[2,56],"40":[2,56],"36":[2,56],"1":[2,56],"4":[2,56],"21":[2,56]},{"24":[2,57],"35":[2,57],"38":[2,57],"40":[2,57],"36":[2,57],"1":[2,57],"4":[2,57],"21":[2,57]},{"24":[2,58],"35":[2,58],"38":[2,58],"40":[2,58],"36":[2,58],"1":[2,58],"4":[2,58],"21":[2,58]},{"24":[2,59],"35":[2,59],"38":[2,59],"40":[2,59],"36":[2,59],"1":[2,59],"4":[2,59],"21":[2,59]},{"24":[2,50],"35":[2,50],"4":[2,50],"1":[2,50],"36":[2,50],"40":[2,50],"38":[2,50],"21":[2,50]},{"24":[2,51],"35":[2,51],"4":[2,51],"1":[2,51],"36":[2,51],"40":[2,51],"38":[2,51],"21":[2,51]},{"24":[2,52],"35":[2,52],"4":[2,52],"1":[2,52],"36":[2,52],"40":[2,52],"38":[2,52],"21":[2,52]},{"24":[2,48],"35":[2,48],"4":[2,48],"1":[2,48],"36":[2,48],"40":[2,48],"38":[2,48],"21":[2,48],"58":[2,48],"23":[2,48],"43":[2,48],"48":[2,48],"39":[2,48]},{"24":[2,49],"35":[2,49],"4":[2,49],"1":[2,49],"36":[2,49],"40":[2,49],"38":[2,49],"21":[2,49]},{"21":[1,63],"56":64,"57":65,"46":66,"49":[1,44]},{"1":[2,23],"4":[2,23],"21":[2,23],"24":[2,23]},{"35":[1,67]},{"45":68,"21":[1,69],"50":[1,45]},{"21":[1,70]},{"4":[1,71],"21":[2,7]},{"24":[1,72]},{"21":[1,73]},{"4":[1,74],"21":[2,4]},{"9":75,"46":76,"47":[1,77],"49":[1,44]},{"9":78,"46":76,"47":[1,77],"49":[1,44]},{"21":[1,79]},{"32":80,"40":[1,81],"4":[2,32],"1":[2,32],"36":[2,32],"21":[2,32],"24":[2,32]},{"34":82,"9":83,"46":76,"47":[1,77],"49":[1,44]},{"4":[2,37],"1":[2,37],"36":[2,37],"40":[2,37],"38":[2,37],"21":[2,37],"24":[2,37]},{"43":[2,66],"38":[2,66],"40":[2,66],"36":[2,66],"1":[2,66],"4":[2,66],"21":[2,66],"24":[2,66],"35":[2,66]},{"44":84,"51":35,"52":36,"46":37,"45":38,"37":39,"42":40,"17":[1,41],"53":[1,42],"54":[1,43],"49":[1,44],"50":[1,45],"20":[1,46],"23":[1,18]},{"24":[2,60],"35":[2,60],"4":[2,60],"1":[2,60],"36":[2,60],"40":[2,60],"38":[2,60],"21":[2,60]},{"21":[1,85],"35":[1,86]},{"21":[2,63],"35":[2,63]},{"58":[1,87]},{"45":88,"21":[1,89],"50":[1,45]},{"21":[1,90]},{"23":[2,42],"43":[2,42],"38":[2,42],"40":[2,42],"36":[2,42],"4":[2,42],"1":[2,42],"21":[2,42],"24":[2,42],"47":[2,42],"49":[2,42],"48":[2,42]},{"22":91,"41":[1,92],"23":[2,34],"43":[2,34],"38":[2,34],"40":[2,34],"36":[2,34],"4":[2,34],"1":[2,34],"20":[2,34],"21":[2,34],"24":[2,34],"47":[2,34],"49":[2,34]},{"7":93,"3":51,"8":3,"11":4,"13":[1,5],"15":[1,6],"16":[1,7],"17":[1,8],"18":[1,9],"19":[1,10],"25":[1,11],"26":[1,12],"27":[1,13],"21":[2,8]},{"14":94,"20":[1,23],"23":[2,43],"43":[2,43],"38":[2,43],"40":[2,43],"36":[2,43],"4":[2,43],"1":[2,43],"21":[2,43],"24":[2,43],"47":[2,43],"49":[2,43]},{"22":95,"41":[1,92],"23":[2,34],"43":[2,34],"38":[2,34],"40":[2,34],"36":[2,34],"4":[2,34],"1":[2,34],"21":[2,34],"24":[2,34],"47":[2,34],"49":[2,34]},{"5":96,"6":54,"8":55,"11":56,"13":[1,5],"15":[1,6],"16":[1,7],"17":[1,8],"18":[1,9],"19":[1,10],"25":[1,11],"26":[1,12],"27":[1,13],"21":[2,5]},{"10":97,"29":16,"42":17,"23":[1,18],"4":[2,36],"21":[2,36],"36":[2,36],"40":[2,36],"38":[2,36],"43":[2,36]},{"21":[2,44],"4":[2,44],"36":[2,44],"40":[2,44],"38":[2,44],"43":[2,44],"23":[2,44],"48":[2,44],"35":[2,44],"39":[2,44]},{"21":[2,45],"4":[2,45],"36":[2,45],"40":[2,45],"38":[2,45],"43":[2,45],"23":[2,45],"48":[2,45],"35":[2,45],"39":[2,45]},{"12":98,"28":20,"48":[1,21],"4":[2,47],"21":[2,47],"36":[2,47],"40":[2,47],"38":[2,47],"43":[2,47],"23":[2,47]},{"1":[2,21],"4":[2,21],"36":[2,21],"40":[2,21],"38":[2,21],"43":[2,21],"23":[2,21],"21":[2,21],"24":[2,21],"49":[2,21],"47":[2,21]},{"33":99,"36":[1,100],"4":[2,28],"1":[2,28],"21":[2,28],"24":[2,28]},{"4":[2,31],"1":[2,31],"36":[2,31],"21":[2,31],"24":[2,31]},{"39":[1,101],"35":[1,102]},{"39":[2,26],"35":[2,26]},{"24":[2,68],"35":[2,68]},{"24":[2,61],"35":[2,61],"4":[2,61],"1":[2,61],"36":[2,61],"40":[2,61],"38":[2,61],"21":[2,61]},{"57":103,"46":66,"49":[1,44]},{"44":104,"51":35,"52":36,"46":37,"45":38,"37":39,"42":40,"17":[1,41],"53":[1,42],"54":[1,43],"49":[1,44],"50":[1,45],"20":[1,46],"23":[1,18]},{"21":[1,105]},{"23":[2,40],"43":[2,40],"38":[2,40],"40":[2,40],"36":[2,40],"4":[2,40],"1":[2,40],"21":[2,40],"24":[2,40],"47":[2,40],"49":[2,40],"48":[2,40]},{"23":[2,41],"43":[2,41],"38":[2,41],"40":[2,41],"36":[2,41],"4":[2,41],"1":[2,41],"21":[2,41],"24":[2,41],"47":[2,41],"49":[2,41],"48":[2,41]},{"14":106,"20":[1,23],"23":[2,43],"43":[2,43],"38":[2,43],"40":[2,43],"36":[2,43],"4":[2,43],"1":[2,43],"21":[2,43],"24":[2,43],"47":[2,43],"49":[2,43]},{"23":[2,33],"43":[2,33],"38":[2,33],"40":[2,33],"36":[2,33],"4":[2,33],"1":[2,33],"20":[2,33],"21":[2,33],"24":[2,33],"47":[2,33],"49":[2,33]},{"21":[2,6]},{"1":[2,19],"4":[2,19],"36":[2,19],"40":[2,19],"38":[2,19],"43":[2,19],"23":[2,19],"21":[2,19],"24":[2,19],"49":[2,19],"47":[2,19]},{"1":[2,20],"4":[2,20],"36":[2,20],"40":[2,20],"38":[2,20],"43":[2,20],"23":[2,20],"21":[2,20],"24":[2,20],"49":[2,20],"47":[2,20]},{"21":[2,3]},{"4":[2,9],"21":[2,9]},{"4":[2,10],"21":[2,10]},{"1":[2,24],"4":[2,24],"21":[2,24],"24":[2,24]},{"37":107,"20":[1,46]},{"4":[2,29],"1":[2,29],"36":[2,29],"40":[2,29],"21":[2,29],"24":[2,29]},{"9":108,"46":76,"47":[1,77],"49":[1,44]},{"21":[2,64],"35":[2,64]},{"21":[2,62],"35":[2,62]},{"23":[2,39],"43":[2,39],"38":[2,39],"40":[2,39],"36":[2,39],"4":[2,39],"1":[2,39],"21":[2,39],"24":[2,39],"47":[2,39],"49":[2,39],"48":[2,39]},{"1":[2,18],"4":[2,18],"36":[2,18],"40":[2,18],"38":[2,18],"43":[2,18],"23":[2,18],"21":[2,18],"24":[2,18],"49":[2,18],"47":[2,18]},{"36":[1,109]},{"39":[2,25],"35":[2,25]},{"4":[2,27],"1":[2,27],"21":[2,27],"24":[2,27]}],
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], table = this.table, yytext = "", yylineno = 0, yyleng = 0, shifts = 0, reductions = 0;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    var parseError = this.yy.parseError = this.yy.parseError || this.parseError;

    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token];
        }
        console.log(token);
        return token;
    }

    var symbol, state, action, a, r, yyval = {}, p, len, ip = 0, newState, expected;
    symbol = lex();
    while (true) {
        state = stack[stack.length - 1];
        action = table[state] && table[state][symbol];
        if (typeof action === "undefined" || !action.length || !action[0]) {
            expected = [];
            for (p in table[state]) {
                if (this.terminals_[p] && p != 1) {
                    expected.push("'" + this.terminals_[p] + "'");
                }
            }
            if (this.lexer.showPosition) {
                parseError("Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", "), {text: this.lexer.match, token: this.terminals_[symbol], line: this.lexer.yylineno, expected: expected});
            } else {
                parseError("Parse error on line " + (yylineno + 1) + ": Unexpected '" + this.terminals_[symbol] + "'", {text: this.lexer.match, token: this.terminals_[symbol], line: this.lexer.yylineno, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        a = action;
        switch (a[0]) {
          case 1:
            shifts++;
            stack.push(symbol);
            ++ip;
            yyleng = this.lexer.yyleng;
            yytext = this.lexer.yytext;
            yylineno = this.lexer.yylineno;
            symbol = lex();
            vstack.push(null);
            stack.push(a[1]);
            break;
          case 2:
            reductions++;
            len = this.productions_[a[1]][1];
            yyval.$ = vstack[vstack.length - len];
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, a[1], vstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[a[1]][0]);
            vstack.push(yyval.$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            this.reductionCount = reductions;
            this.shiftCount = shifts;
            return true;
          default:;
        }
    }
    return true;
}};/* Jison generated lexer */
var lexer = (function(){var lexer = ({EOF:"",
parseError:function parseError(str, hash) {
    if (this.yy.parseError) {
        this.yy.parseError(str, hash);
    } else {
        throw new Error(str);
    }
},
setInput:function (input) {
    this._input = input;
    this._more = this._less = this.done = false;
    this.yylineno = this.yyleng = 0;
    this.yytext = this.matched = this.match = "";
    return this;
},
input:function () {
    var ch = this._input[0];
    this.yytext += ch;
    this.yyleng++;
    this.match += ch;
    this.matched += ch;
    var lines = ch.match(/\n/);
    if (lines) {
        this.yylineno++;
    }
    this._input = this._input.slice(1);
    return ch;
},
unput:function (ch) {
    this._input = ch + this._input;
    return this;
},
more:function () {
    this._more = true;
    return this;
},
pastInput:function () {
    var past = this.matched.substr(0, this.matched.length - this.match.length);
    return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
},
upcomingInput:function () {
    var next = this.match;
    if (next.length < 20) {
        next += this._input.substr(0, 20 - next.length);
    }
    return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
},
showPosition:function () {
    var pre = this.pastInput();
    var c = (new Array(pre.length + 1)).join("-");
    return pre + this.upcomingInput() + "\n" + c + "^";
},
next:function () {
    if (this.done) {
        return this.EOF;
    }
    if (!this._input) {
        this.done = true;
    }
    var token, match, lines;
    if (!this._more) {
        this.yytext = "";
        this.match = "";
    }
    for (var i = 0; i < this.rules.length; i++) {
        match = this._input.match(this.rules[i]);
        if (match) {
            lines = match[0].match(/\n/g);
            if (lines) {
                this.yylineno += lines.length;
            }
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, i);
            if (token) {
                return token;
            } else {
                return;
            }
        }
    }
    if (this._input == this.EOF) {
        return this.EOF;
    } else {
        this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text: "", token: null, line: this.yylineno});
    }
},
lex:function () {
    var r = this.next();
    if (typeof r !== "undefined") {
        return r;
    } else {
        return this.lex();
    }
}});
lexer.performAction = function anonymous(yy, yy_) {
    switch (arguments[2]) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        return 4;
        break;
      case 4:
        return 35;
        break;
      case 5:
        return 20;
        break;
      case 6:
        return 21;
        break;
      case 7:
        return 23;
        break;
      case 8:
        return 24;
        break;
      case 9:
        return 36;
        break;
      case 10:
        return 38;
        break;
      case 11:
        return 39;
        break;
      case 12:
        return 58;
        break;
      case 13:
        return 25;
        break;
      case 14:
        return 13;
        break;
      case 15:
        return 15;
        break;
      case 16:
        return 17;
        break;
      case 17:
        return 16;
        break;
      case 18:
        return 18;
        break;
      case 19:
        return 19;
        break;
      case 20:
        return 26;
        break;
      case 21:
        return 27;
        break;
      case 22:
        return 53;
        break;
      case 23:
        return 54;
        break;
      case 24:
        yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);
        return 49;
        break;
      case 25:
        return 50;
        break;
      case 26:
        return 47;
        break;
      case 27:
        return 40;
        break;
      case 28:
        return 41;
        break;
      case 29:
        return 43;
        break;
      case 30:
        return 48;
        break;
      default:;
    }
};
lexer.rules = [/^\s+/, /^\/\/[^\n]*/, /^#[^\n]*/, /^;/, /^,/, /^\{/, /^\}/, /^\[/, /^\]/, /^`/, /^</, /^>/, /^:/, /^object\b/, /^integer\b/, /^number\b/, /^null\b/, /^boolean\b/, /^any\b/, /^array\b/, /^union\b/, /^string\b/, /^true\b/, /^false\b/, /^"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/, /^-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/, /^[A-Za-z_0-9-]+/, /^\?/, /^\*/, /^=/, /^\/(?:[^\/]|\/)*\//];return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined') {
exports.parser = parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
exports.main = function commonjsMain(args) {
    var cwd = require("file").path(require("file").cwd());
    if (!args[1]) {
        throw new Error("Usage: " + args[0] + " FILE");
    }
    var source = cwd.join(args[1]).read({charset: "utf-8"});
    this.parse(source);
}
if (require.main === module) {
	exports.main(require("system").args);
}
}
