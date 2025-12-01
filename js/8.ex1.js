// 제어문 실습 1

// 1. 1부터 100까지 짝수의 합을 구해서 출력
let sum =0;
for (let i=2; i<=100; i=i+2) {
    sum += i;
}
console.log(`1부터 100까지 짝수의 합 : ${sum}`);

// 2. 1부터 100까지 7의 배수 중 50보다 큰 수들을 출력
for (let i=7; i<=100; i=i+7) {
    if (i>50) console.log(i);
}

// 3. 1부터 1000까지 홀수의 개수와 짝수의 개수 출력
let oddCount = 0;
let evenCount = 0;
for (let i=1; i<=1000; i++) {
    if (i%2==0) evenCount++;
    else oddCount++;
}
console.log(`홀수:${oddCount}개, 짝수:${evenCount}개`);

// 4. 1부터 1000까지 제곱수만 출력
//     제곱수:정수를 제곱한 수, 예> 1은 1*1이므로 제곱수, 4는 2*2이므로 제곱수 ...
for (let i=1; i*i<=1000; i++) console.log(i*i );

// 5. 윤년 판별
//     윤년:4로 나눈 나머지가 0이면서 100으로 나눈 나머지가 0이 아니거나 400으로 나눈 나머지가 0인 연도
let year = 2025;
if ((year%4==0&&year%100!=0) || year%400==0) console.log('윤년');
else console.log('윤년 아님');

// 6. 세 수 중 가장 큰 수를 출력
let num1 = 25;
let num2 = 47;
let num3 = 39;
let max = num1>=num2 ? (num1>=num3 ? num1 : num3) : (num2>=num3 ? num2 : num3);
console.log(`세 수 중 가장 큰 수는 ${max}`);

// 7. 팩토리얼(factorial) 계산해서 출력
//     팩토리얼 : 1부터 해당 수까지 곱한 수 (예> 5팩토리얼 : 1*2*3*4*5)
let num = 5;
let result = 1;
for (let i=1; i<=num; i++) {
    result *= i;
}
console.log(`${num} 팩토리얼 : ${result}`);

// 8. 1000까지 피보나치 수열 출력
//     피보나치 수열 : 1과 2를 제외하고 바로 앞 두 수의 합이 마지막 수가 되는 수열
//          1
//          1 2
//          1 2 3
//          1 2 3 5
//          1 2 3 5 8
//          ...
const LIMIT = 1000;
for (let i=1, stop=false; !stop; i++) {
    let a=1, b=1;
    let line = "";
    for (let j=1; j<=i; j++) {
        if (j==1) {
            line += '1 ';
        } else {
            let next = a + b;            
            if (next > LIMIT) {
                stop = true;
                break;
            }            
            line += next + ' ';            
            a = b;
            b = next;
        }
    }
    if(!stop) console.log(line);
}