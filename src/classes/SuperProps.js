"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SuperTypes_1 = __importDefault(require("./SuperTypes"));
var SuperProps = /** @class */ (function () {
    function SuperProps(props) {
        var _a;
        this.types = [];
        if (Array.isArray(props.type)) {
            (_a = this.types).push.apply(_a, props.type);
        }
        else {
            this.types.push(props.type);
        }
        this.validation = props.validation;
        this.enum = props.enum;
    }
    SuperProps.prototype.check = function (prop) {
        if ((this.enum && this.enum.includes(prop)) || !this.enum) {
            var propType_1 = new SuperTypes_1.default(prop);
            var realType_1 = SuperTypes_1.default.any;
            var typesValidation = this.types.some(function (type) {
                if (propType_1.is(type)) {
                    realType_1 = type;
                    return true;
                }
                else {
                    return false;
                }
            });
            if (typesValidation) {
                return this.validation ? this.validation(prop, realType_1) : true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    return SuperProps;
}());
exports.default = SuperProps;
//# sourceMappingURL=SuperProps.js.map