import 'reflect-metadata';

function debounce(ms: number): MethodDecorator {
    let timeout: number | null;
    let result: unknown;
    return function (_target: object, _key: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
        return {
            ...descriptor,
            value: (...args: unknown[]) => {
                timeout ? clearTimeout(timeout) : null;
                timeout = setTimeout(() => {
                    timeout = null;
                    result = descriptor.value(...args);
                }, ms);
                return result;
            }
        };
    };
}

function logMethod(
    target: object,
    key: string | symbol,
    _descriptor: PropertyDescriptor
): void {
    console.log(Reflect.getMetadata('design:type', target, key));
    console.log(Reflect.getMetadata('design:paramtypes', target, key));
    console.log(Reflect.getMetadata('design:returntype', target, key));
}

const RANGE_KEY: string = 'RANGE_KEY';

function rangeParameter(
    min: number = 0,
    max: number = 100,
): ParameterDecorator {
    return (
        target: object,
        key: string | symbol,
        index: number
    ) => {
        const existingRange: { [key: number]: number[] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        existingRange[index] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    };
}

function validation(
    target: object,
    key: string | symbol,
    descriptor: PropertyDescriptor
): void {
    const savedValue: (...args: unknown[]) => unknown = descriptor.value;
    descriptor.value = (...args: unknown[]) => {
        const existingRange: { [key: number]: number[] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        for (const key1 of Object.keys(existingRange)) {
            const range: [number, number] = existingRange[key1 as any] as [number, number];
            const value: number = args[key1 as any] as number;
            if (value < range[0] || value > range[1]) {
                throw new Error('Value outside of range');
            }
        }
        return savedValue(...args);
    };

}

class MathLib {
    @debounce(1000)
    @logMethod
    @validation
    public circleArea(
        @rangeParameter(1, 100) r: number,
        _logType?: string
    ): number {
        const result: number = Math.PI * r ** 2;
        console.log(result);
        return result;
    }
}

const m: MathLib = new MathLib();
// console.log('CONSOLE=>', Reflect.getMetadata('design:returntype', m, 'circleArea'));
m.circleArea(10);
// m.circleArea(100);
setTimeout(() => {
    try {
        m.circleArea(140);
    } catch (err) {
        console.log(err);
    }

}, 1500);
// m.circleArea(2);


