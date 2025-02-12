let num: number | string = 50;
// string | number[]
// string[] | number[] = масив чисел чи масив строк
// (string | number)[] = масив з строк чи чисел

const arr: (string | number)[] = ["one", 'two', '3'];
arr.push(5);
console.log("Mixed array = ", arr);

// () => {}
// (): number => {}
// arrow function 
const sum1 = (a: number, b: number): number | void => {console.log(`${a} - A + ${b} - B = `, (a+b))};
sum1(5,6);


const res = sum1(1,5) as number + 10;
console.log("The sum + 10 = ", res);

// arrow f vs regular function
const sum2 = (a: number, b: number): number => {return a + b;}
console.log("The sum2 function: 3 + 5 =", sum2(3,5));

function sum3(a: number, c: number): number {
    return a + c;
}