// interface IAccount {
//     firstName: string;
//     age: number;
// }
//
// let user = IAccount;

//
// let user = {
//     firstName: 'Igor',
//     age: 33
// };
//
// let person: typeof user = {
//     age: 33
// };
//
//
// let age = 1;
//
// age = 'asd'


// let person: typeof user = {
//     firstName: 'b',
//     age: 33,
// }
// let user = {
//     firstName: 'a',
//     age: 33
// };
//
// let isDone: boolean = false;
//
// let decimal: number | null = 1;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;
// let infinity: number = Infinity;
//
// let firstName: string = 'Igor';
//
// let nullValue: null = null;
// let undefinedValue: undefined = undefined;
//
// let bigNum1: bigint = BigInt(100);
// let bigNum2: bigint = 100n;
//
// function fibonacci(n: bigint) {
//     let result: bigint = 1n;
//     for (let last: bigint = 0n, i: bigint = 0n; i < n; i++) {
//         const current: bigint = result;
//         result += last;
//         last = current;
//     }
//     return result;
// }
//
// console.log(fibonacci(100000n));
//
// const key1: unique symbol = Symbol();
// const key2: symbol = Symbol('key2');
// const key3: symbol = Symbol('key3');
//
// let strictOb: { [key1: string]: string | number } = {
//     [key1]: 100,
//     [key2]: 'hi',
// }
//
// // TODO unique ?????
// let a1 = strictOb[key1];
// let a2 = strictOb[key2];
//
// function fn(_value: typeof key1): void {
//
// }
//
// fn(key1);
// interface IAnimationsOptions {
//     delayX: number;
//     delayY: number;
//     easing: 'ease-in' | 'ease-out' | 'ease-in-out';
// }
//
// declare class UIElement {
//     public animate(options: IAnimationsOptions): void;
// }
//
// new UIElement().animate({delayX: 10, delayY: 10, easing: 'ease-in'});
//
// type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 ;
// let num: Digits = 0;
// declare function $(selector: string): any;
// type $ = () => {}
// let fn: $ = () => {
// };
// $('.some_class').;
//
// type a = number;
// let a: string;

// let anyType: any = {};
// anyType = 1;
// anyType['some_property'] = 22;
// anyType();


// TODO object vs unknown;

// let anyType1: unknown = {a: 1};
// anyType1 = 1;
// anyType1['some_property'] = 22;
// anyType1.a = 1;
// anyType1();
//
// let objType: Object = {a: 1};  // {}
// objType.a = 1;
// objType['a'] = 22;
// objType = 1;
// objType();
// //
// // let z: Object | null = 1;
// // Object.create(z);
//
// let objType1: object = [1, 2, 3];
// objType1.a = 1;
// objType1['a'] = 22;
// objType1 = 1;
// objType1();
//
// let z: object | null = 1;
// Object.create(z);
//
//
// let voidType: void = undefined;
//
// function fn(): void {
// }
type TACCOUNT = {
    readonly firstName: string,
    readonly  age?: number
}
const user: TACCOUNT = {
    firstName: 'Igor',
};

let key: keyof TACCOUNT; // 'firstName' | 'age'

let firstNameType: TACCOUNT['firstName'] = 'asdasd';


let arr: readonly number[] = [1, 2, 3];
arr[1000] = 1;
arr.push(1);

let tupleArr: readonly [number, typeof user] = [1, {
    firstName: 'Igor',
}];
tupleArr[1000] = 1;
tupleArr.push(1);


// function fn(event: KeyboardEvent) {
// //     let el: HTMLInputElement = event.target as HTMLInputElement;
// //     el.valeu
// // }
// let a: number | string = 1;
// let b: string = a as string;

// let x = 10 as const;
// x = 22;
//
// let user1 = {
//     firstName: 'Igor',
// } as const;
//
// user1 = {
//     firstName: 'Igor',
// }
// user1.firstName = 'asdasd';
//
// let y = [1, 2] as const;
// y[100] = 11;
// y.push(11);


// interface IAccount {
// //     firstName: string;
// // }
// //
// // class Account implements IAccount {
// //     public firstName: string = 'Igor';
// // }

// type TStop = {
//     stop: boolean
// };
//
// interface IMover {
//     readonly id?: number;
//
//     move(): this;
//
//     getStatus(): { speed: number };
// }
//
// interface IShaker {
//     shake(): void;
//
//     getStatus(): { frequence: number };
// }
//
// interface IMoveShake extends IMover, IShaker, TStop {
//     shake(): number;
//
//     getStatus(): { speed: number, frequence: number };
// }

//
// interface IBase {
//     id: number;
// }
//
// let base1: IBase = {id: 1, name: 'Igor'};
//
//
// interface IBase {
//     name: string;
// }
// type IBase0 = {
//     id: number;
// }
//
// type IBase = {
//     readonly  id: number;
//     info: IBase0
// }


// interface IU {
//     firstName: string;
// }
//
// class U implements IU {
//     public get firstName(): string {
//         return 'asdasd';
//     }
// }

// interface IAccount<someProp = string, U = number> {
// //     id: someProp;
// //     info: U[];
// // }
// //
// // let user1: IAccount = {
// //     id: 'asda',
// //     info: [1, 2, 3]
// // };
// // let admin: IAccount<number> = {
// //     id: 1,
// //     info: [1, 2, 3]
// // };
// type Acc = { id: number, name: string }
//
// interface IA<T extends Acc, U, C extends Acc> {
//     someProp: T;
//     someProp1: C;
//     someProp2: U;
// }
//
// let b: IA<{ id: number, name: string, female: boolean }>;


// interface Animal {
//     live(): void;
// }
//
// interface Dog extends Animal {
//     woof(): void;
// }
//
// type CustomType = RegExp extends Animal ? number : string;

// let b: CustomType = 1;

interface IPerson {
    firstName: string;
    age: number;
}

type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
};

// keyof T => 'firstName' | 'age'
// P in => на каждой итерации firstName , age
// readonly firstName: string
// readonly age: number

let user1: ReadOnly<IPerson> = {
    firstName: 'Igor',
    age: 33
};

user1.age = 34;

type NotReadOnly<T> = {
    -readonly [P in keyof T]: T[P]
};

type Exlude<T, U> = T extends U ? never : T;
type snb = string | number | boolean;
let a: Exlude<snb, string> = 'asd';

