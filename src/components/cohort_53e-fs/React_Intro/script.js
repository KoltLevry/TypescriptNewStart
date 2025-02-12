var num = 50;
// string | number[]
// string[] | number[] = масив чисел чи масив строк
// (string | number)[] = масив з строк чи чисел
var arr = ["one", 'two', '3'];
arr.push(5);
console.log("Mixed array = ", arr);
// () => {}
// (): number => {}
var sum1 = function (a, b) { console.log("".concat(a, " - A + ").concat(b, " - B = "), (a + b)); };
sum1(5, 6);
var res = sum1(1, 5) + 10;
console.log("The sum + 10 = ", res);
var sum2 = function (a, b) { return a - b; };
console.log("The sum2 function: 3 - 5 = ", sum2(3, 5));
