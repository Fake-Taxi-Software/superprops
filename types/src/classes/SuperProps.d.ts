import SuperPropsProps from '../interfaces/SuperPropsProps';
import Type from '../types/Type';
import Validation from '../types/Validation';
export default class SuperProps {
    types: Array<Type>;
    enum?: Array<any>;
    validation?: Validation;
    constructor(props: SuperPropsProps);
    check(prop: any): boolean;
}
//# sourceMappingURL=SuperProps.d.ts.map