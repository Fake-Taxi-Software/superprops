import Type from '../types/Type';
import ArrayOfValues from '../types/ArrayOfValues';
export default class SuperTypes {
    prop: any;
    constructor(prop: any);
    get isString(): boolean;
    get isNumber(): boolean;
    get isInt(): boolean;
    get isFloat(): boolean;
    get isBoolean(): boolean;
    get isArray(): boolean;
    is(type: ArrayOfValues): boolean;
    static string: Type;
    static number: Type;
    static int: Type;
    static float: Type;
    static boolean: Type;
    static any: Type;
    static arrayOf(type: ArrayOfValues): {
        $arrayOf: ArrayOfValues;
    };
}
//# sourceMappingURL=SuperTypes.d.ts.map