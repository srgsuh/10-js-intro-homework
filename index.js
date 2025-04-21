/* Computes the sum of the digits of an integer */
function sumOfDigits(num) {
    num = Math.trunc(Math.abs(num));
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit;
        num = (num - digit) / 10;
    }
    return sum;
}

{
    let num, ans;
    num = 8;
    ans = 8;
    console.assert(sumOfDigits(num) === ans, "Sum of digits of %d must be equal to %d", num, ans);
    num = 1234;
    ans = 10;
    console.assert(sumOfDigits(num) === ans, "Sum of digits of %d must be equal to %d", num, ans);
    num = 111111111;
    ans = 9;
    console.assert(sumOfDigits(num) === ans, "Sum of digits of %d must be equal to %d", num, ans);
    num = 10;
    ans = 1;
    console.assert(sumOfDigits(num) === ans, "Sum of digits of %d must be equal to %d", num, ans);
    num = 1000000000001;
    ans = 2;
    console.assert(sumOfDigits(num) === ans, "Sum of digits of %d must be equal to %d", num, ans);
    num = 0;
    ans = 0;
    console.assert(sumOfDigits(num) === ans, "Sum of digits of %d must be equal to %d", num, ans);
    num = 9999999;
    ans = 63;
    console.assert(sumOfDigits(num) === ans, "Sum of digits of %d must be equal to %d", num, ans);
    num = 7007;
    ans = 14;
    console.assert(sumOfDigits(num) === ans, "Sum of digits of %d must be equal to %d", num, ans);
}
/* An integer is considered lucky if the sum of its digits in the even positions
is equal to the sum of the digits in the odd positions. */
function isLuckyNumber(num) {
    let sumOfOdd = 0, sumOfEven = 0;
    let isOddDigit = true;
    num = Math.trunc(Math.abs(num));
    while (num > 0) {
        const digit = num % 10;
        sumOfOdd += isOddDigit? digit: 0;
        sumOfEven += isOddDigit? 0: digit;
        isOddDigit = !isOddDigit;
        num = (num - digit) / 10;
    }
    return sumOfOdd === sumOfEven;
}

{
    let num, ans;
    num = 0;
    ans = true;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
    num = 7;
    ans = false;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
    num = 13;
    ans = false;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
    num = 11;
    ans = true;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
    num = 297;
    ans = true;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
    num = 7810;
    ans = true;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
    num = 8008;
    ans = true;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
    num = 90009;
    ans = false;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
    num = 144287;
    ans = true;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
    num = 1234567887654321;
    ans = true;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
    num = 1234567;
    ans = false;
    console.assert(isLuckyNumber(num) === ans, "%d is %s number", num, ans? "a lucky": "an unlucky");
}