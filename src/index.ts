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
$('.some_class').;

type a = number;
let a: string;