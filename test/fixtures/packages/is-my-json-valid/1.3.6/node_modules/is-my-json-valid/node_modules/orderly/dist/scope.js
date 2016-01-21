// these scope are exposed through the yy namespace within parsing/lexing actions

if (typeof require !== 'undefined') {
    var scope = exports;
} else {
    var scope = parser.yy;
}

scope.NOVALUE = {};

scope.Type = function () {
    return this.init.apply(this, arguments);
};

scope.Type.prototype = {
    init: function (type, range, entries, additional) {
        this.json = {};
        this.json.type = type;

        if (type instanceof Array && type.length < 2) {
            throw new Error("must have at least two members in a union");
        }

        if (range) {
            this.addRange(range);
        }
        if (entries) {
            this.addEntries(entries);
            if (!additional && (entries.length || entries.type)) {
                if (type === 'array') {
                    this.json.additionalItems = false;
                } else {
                    this.json.additionalProperties = false;
                }
            }
        }
        return this.json;
    },
    addEntries: function (entries) {
        if (this.json.type === "array" && (!(entries instanceof Array) || entries.length > 0)) {
            this.json.items = entries;
        } else if (entries.length) {
            this.json.properties = {};
            for (var i=0;i<entries.length;i++) {
                this.json.properties[entries[i][0]] = entries[i][1];
            }
        }
    },
    addRange: function (tuple) {
        var suf = this.json.type === 'array' ? 'Items' : this.json.type === 'string' ? 'Length' : 'imum';
        if (tuple[0] !== null) this.json['min' + suf] = tuple[0];
        if (tuple[1] !== null) this.json['max' + suf] = tuple[1];
    }
};

scope.Type.addOptionals = function (type, o) {
    if (o.extras) {
        var prop;
        for (prop in o.extras) if (o.extras.hasOwnProperty(prop))
            type[prop] = o.extras[prop];
    }
    if (!o.optional) {
        type.required = true;
    }
    if (o.enums) {
        type["enum"] = o.enums;
    }
    if (o.dependencies) {
        type.dependencies = o.dependencies.length > 1 ? o.dependencies : o.dependencies[0];
    }
    if (o.defaultv !== scope.NOVALUE) {
        type["default"] = o.defaultv;
    }
    if (o.pattern) {
        type.pattern = o.pattern;
    }
};

