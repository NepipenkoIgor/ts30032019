// import { generateMenu } from './menu/menu';
// import { menuList } from './menu/data';
//
// const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
// if (navMenu) {
//     navMenu.innerHTML = generateMenu(menuList);
//     navMenu.onclick = (e: MouseEvent) => {
//         const el: HTMLAnchorElement = e.target as HTMLAnchorElement;
//         const classList: DOMTokenList = el.classList;
//         if (!classList.contains('title')) {
//             return;
//         }
//         const parenLi: HTMLLIElement = el.parentNode as HTMLLIElement;
//         parenLi.classList.toggle('menu-open');
//     };
// }


// export function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }

// average(1, 2, 3, 4);
// average(1, '2', 3);
// let avg: number = average(1, 2, 3);
//
//
// function average1(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average1(1);
// average1(1, 3);
// average1(1, 3, 3);
//
// function average2(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average2(1);
// average2(1, 3);
// average2(1, 3, 3);
//
// type sn = number | string;
// let b: sn[] = ['s', 1, 's', 1]
// type snArr = number[] | string[];
// let c: snArr = [1, 1, 1, 1];
//
// function isString(a: number | string): a is string {
//     return typeof a === 'string';
// }
//
// function average3(...arr: (number | string)[]): string {
//     let total: number = 0;
//     for (const a of arr) {
//         if (isString(a)) {
//             total += parseInt(a);
//             continue;
//         }
//         total += a;
//     }
//     const avg: number = total / arr.length;
//     return `Average is ${avg}`;
// }
//
// function average4(a: string, b: string): string;
// function average4(a: number, b: number): string;
// function average4(...arr: sn[]): string {
//     let total: number = 0;
//     for (const a of arr) {
//         if (isString(a)) {
//             total += parseInt(a);
//             continue;
//         }
//         total += a;
//     }
//     const avg: number = total / arr.length;
//     return `Average is ${avg}`;
// }
//
// average4('1', 2);
// average4(1, '2', 1);
// average4(1, 1);
// average4('1', '1')
//
// average3('1', 2);
// average3(1, '2', 1);
// average3(1, 1, 1);
// average3('1', '1', '1')

// let aP: Promise<number> = Promise.resolve(1);
// let bP: Promise<string> = Promise.resolve('1');

// async function parseValues(): Promise<void> {
//     const a: number = await aP;
//     const b: string = await bP;
// }

// type st = { prop1?: number, prop2?: number };
//
// function fn({prop1: arg1 = 10, prop2: arg2 = 20}: st): { sum: number } {
//     return {sum: arg1 + arg2};
// };

// interface IX {
//     x: number;
// }
//
// interface ISum {
//     sum(): number;
// }
//
// abstract class BasePoint {
//     public readonly x: number = 1;
//     protected y!: number;
//     private z!: number;
//
//     protected constructor(..._arg: number[]) {
//         this.x = 3;
//     }
//
//     public abstract sum(): number;
//
//     public getX(): void {
//         this.x = 1;
//     }
// }

// class Point extends BasePoint {
//     public constructor(..._arg: number[]) {
//         super(..._arg);
//     }
//
//     public sum(): number {
//         return this.x + this.y;
//     }
// }

// class Singleton {
//     private static _instance: Singleton;
//     private constructor() {
//     }
//     public static getInstance(): Singleton {
//         if (!Singleton._instance) {
//             Singleton._instance = new Singleton();
//         }
//         return Singleton._instance;
//     }
// }
//
// const inst1: Singleton = Singleton.getInstance();
// const inst2: Singleton = Singleton.getInstance();
//
// class A extends Singleton{
//
// }

// abstract class AbstractInputElement {
//     public abstract getValue(): any;
//
//     public onFocus(): void {
//         // set border to parent element
//     }
// }
//
// class UIInputElement extends AbstractInputElement {
//     public getValue(): string {
//         return 'string';
//     }
// }

// export type Contstructable = new (...args: any[]) => {};
//
// export function Timestamped<BC extends Contstructable>(Base: BC): any {
//     return class extends Base {
//         public timestamp: Date = new Date();
//     };
// }
//
// export function Tagged<BC extends Contstructable>(Base: BC): any {
//     return class extends Base {
//         public tagged: string = 'my_custom_tag';
//     };
// }
//
// class Point {
//     public constructor(
//         public x: number,
//         public y: number,
//     ) {
//     }
// }
//
// class SpecialPoint extends Tagged(Timestamped(Point)) {
//     public constructor(x: number, y: number, public z: number) {
//         super(x, y);
//     }
// }
//
// const point: SpecialPoint = new SpecialPoint(1, 2, 5);
// point.timestamp.getDate();

// TODO subsequent declaration
// export interface IA {
//     a: number;
// }
//
// export class IA {
//     public a: number = 1;
// }

// interface Connector {
//     doConnect(): boolean;
// }
//
// export class WiFiConnector implements Connector {
//     public doConnect(): boolean {
//         console.log('connect wifi');
//         console.log('set password');
//         console.log('connect');
//         return true
//     }
// }
//
// export class BluetoothConnector implements Connector {
//     public doConnect(): boolean {
//         console.log('connect bluetooth');
//         console.log('pair');
//         console.log('connect');
//         return true
//     }
// }
//
// class System {
//     public constructor(private connector: Connector) {
//         this.connector.doConnect();
//     }
// }
//
// class BasePoint {
//     public constructor(public x: number, public y: number) {
//
//     }
//
//     public sum(): number {
//         return this.x + this.y;
//     }
// }
//
// class Point1 extends BasePoint {
//     public constructor(x: number, y: number) {
//         super(x, y);
//     }
//
//     public sum(): number {
//         return this.x * 2 + this.y * 2;
//     }
// }