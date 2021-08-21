//lesson 1
//let tc = 30;
//let tf;
//tf = (9 / 5) * tc + 32;
//alert(tf);

//let name;
//let admin;
//name = "Василий";
//admin = name;
//alert(admin);
//console.log(admin);

//чему будет = выражение 1000 + "108"?
//ответ: 1000108
//defer: не блокируют отрисовку страницы, но скрипты выполняются так, как расположены в документе)
//async: не блокируют старинцу, скрипт запускается в порядке загрузки, не зависят от расположения в документе

//lesson 2

//Part 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 : 1+1=2 (префиксное увеличение)
// d = b++; alert(d);           // 1 : постфиксное увеличение, d=изначальному b
// c = (2+ ++a); alert(c);      // 5 : a ранее стало=2, значит 2+2+1
// d = (2+ b++); alert(d);      // 4 : b ранее стало 2, значит 2+2 (постфиксное, значит +1 не сработает для d)
// alert(a);                    // 3 : для a ранее 2 раза было ++a
// alert(b);                    // 3 : для b ранее 2 раза было b++

//Part 2
// var a = 2;
// var x = 1 + (a *= 2);
// x будет равен 5

//Part 3
let userAnswerA, userAnswerB;
function compareNumbers() {
    const userAnswerA = parseInt(prompt('Введите любое целое число A'));
    const userAnswerB = parseInt(prompt('Введите любое целое число B'));
    if ((userAnswerA >= 0) && (userAnswerB >= 0)) return alert('Оба положительные - разность чисел = ' + (userAnswerA-userAnswerB));
    else if ((userAnswerA < 0) && (userAnswerB < 0)) return alert('Оба отрицательные - произведение чисел = ' + (userAnswerA*userAnswerB));
    else if (((userAnswerA >=0) && (userAnswerB <0)) || ((userAnswerA < 0) && (userAnswerB >= 0))) return alert('Числа разных знаков - сумма чисел = ' + (userAnswerA+userAnswerB));
    else return alert('Введите корректно числа');
    return;
}
compareNumbers();

//Part 4
function recursion(x) {
    if (x <= 0 || x > 15 || !Number.isInteger(x)) return 'Задайте целое число больше 0 и меньше 16';
    if (x === 15) return '15';
    //return recursion(x - 1) + ' ' + x; // recursion(2) + ' ' + 3; => ((2 - 1) + 2) + 3
    return x + ' ' + recursion(x + 1);
}
console.log(recursion(8));

//Part 5
function arithmeticsSumm(y,x) {
    return y + x;
}
function arithmeticsDelta(y,x) {
    return y - x;
}
function arithmeticsMulti(y,x) {
    return y * x;
}
function arithmeticsDivision(y,x) {
    return y / x;
}
console.log(arithmeticsSumm(5, 10));
console.log(arithmeticsDelta(5, 10));
console.log(arithmeticsMulti(5, 10));
console.log(arithmeticsDivision(5, 10));

//Part 6
function operations(arg1, arg2, operation) {
    switch (operation) {
        case "+": return arithmeticsSumm(arg1, arg2);
        case "-": return arithmeticsDelta(arg1, arg2);
        case "*": return arithmeticsMulti(arg1, arg2);
        case "/": return arithmeticsDivision(arg1, arg2);
    }
}
console.log(operations(10, 2, "/"));




