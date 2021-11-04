"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SuperCondition = /** @class */ (function () {
    function SuperCondition() {
    }
    SuperCondition.or = function () {
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i] = arguments[_i];
        }
        return types;
    };
    SuperCondition.enum = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return values;
    };
    return SuperCondition;
}());
exports.default = SuperCondition;
//# sourceMappingURL=SuperCondition.js.map