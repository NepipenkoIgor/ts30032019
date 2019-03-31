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


export function average(a: number, b: number, c: number): string {
    const avg: number = (a + b + c) / 3;
    return `Average is ${avg}`;
}

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