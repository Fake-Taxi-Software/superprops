"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SuperInterface_1 = __importDefault(require("./SuperInterface"));
var SuperProps_1 = __importDefault(require("./SuperProps"));
var SuperTypes = /** @class */ (function () {
    function SuperTypes(prop) {
        this.prop = prop;
    }
    Object.defineProperty(SuperTypes.prototype, "isString", {
        get: function () {
            return typeof (this.prop) === SuperTypes.string;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuperTypes.prototype, "isNumber", {
        get: function () {
            return typeof (this.prop) === SuperTypes.number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuperTypes.prototype, "isInt", {
        get: function () {
            return typeof (this.prop) === SuperTypes.number && Math.round(this.prop) === this.prop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuperTypes.prototype, "isFloat", {
        get: function () {
            return typeof (this.prop) === SuperTypes.number && !this.isInt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuperTypes.prototype, "isBoolean", {
        get: function () {
            return typeof (this.prop) === SuperTypes.boolean;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuperTypes.prototype, "isArray", {
        get: function () {
            return Array.isArray(this.prop);
        },
        enumerable: false,
        configurable: true
    });
    SuperTypes.prototype.is = function (type) {
        if (type === 'string') {
            return this.isString;
        }
        else if (type === 'number') {
            return this.isNumber;
        }
        else if (type === 'int') {
            return this.isInt;
        }
        else if (type === 'float') {
            return this.isFloat;
        }
        else if (type === 'boolean') {
            return this.isBoolean;
        }
        else if (type instanceof SuperProps_1.default || type instanceof SuperInterface_1.default) {
            return type.check(this.prop);
        }
        else if (typeof (type) === 'object') {
            if (this.isArray && this.prop.every(function (child) {
                var childType = new SuperTypes(child);
                return childType.is(type.$arrayOf);
            })) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (type === 'any') {
            return true;
        }
        else {
            return false;
        }
    };
    SuperTypes.arrayOf = function (type) {
        return ({
            $arrayOf: type
        });
    };
    SuperTypes.string = 'string';
    SuperTypes.number = 'number';
    SuperTypes.int = 'int';
    SuperTypes.float = 'float';
    SuperTypes.boolean = 'boolean';
    SuperTypes.any = 'any';
    return SuperTypes;
}());
exports.default = SuperTypes;
//# sourceMappingURL=SuperTypes.js.map