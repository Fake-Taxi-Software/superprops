"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SuperProps_1 = __importDefault(require("./SuperProps"));
var SuperInterface = /** @class */ (function () {
    function SuperInterface(superInterface) {
        this.superInterface = superInterface;
    }
    SuperInterface.prototype.check = function (prop) {
        var _this = this;
        var superInterfaceKeys = Object.keys(this.superInterface);
        var propsKeys = Object.keys(prop);
        var optional = superInterfaceKeys.filter(function (key) { return key.endsWith('?'); });
        if (propsKeys.length <= superInterfaceKeys.length && propsKeys.length >= superInterfaceKeys.length - optional.length && propsKeys.every(function (key) { return superInterfaceKeys.includes(key) || superInterfaceKeys.includes(key + '?'); })) {
            return propsKeys.map(function (key) {
                var value = prop[key];
                var type = _this.superInterface[key] || _this.superInterface[key + '?'];
                if (type instanceof SuperProps_1.default || type instanceof SuperInterface) {
                    return type.check(value);
                }
                else {
                    var validator = new SuperProps_1.default({
                        type: type
                    });
                    return validator.check(value);
                }
            }).every(function (value) { return value; });
        }
        else {
            return false;
        }
    };
    return SuperInterface;
}());
exports.default = SuperInterface;
//# sourceMappingURL=SuperInterface.js.map