/*
    타입스크립트 기본 타입
    - 변수에 타입 지정시 변수명 뒤에 :을 사용, : 뒤에 타입 명시
*/

// sting
let hello: string = 'hello';
console.log(hello);
//hello = 100;

// number
let num: number = 10;
//num = 'hello';

// boolean
let bool: boolean = true;
//bool = 3;

// object
let obj: object = {
    name: '홍길동',
    age: 20
};
console.log(obj);

// array
let arr1: string[] = ['홍길동', '강감찬', '이순신'];
let arr2: Array<string> = ['홍길동', '강감찬', '이순신'];

// tuple
let tup: [string, number] = ['홍길동', 20];

// any
let at: any = 100;
at = '백';
at = [1, 2, 3];

// null
let nul: null = null;

// undefined
let und: undefined = undefined;

// function

function getStr(str: string): string {
    return 'hi' + str;
}
getStr('홍길동');

function getInfo1(name: string, age: number, hobby: string): void {
    console.log(name, age, hobby);
}
getInfo1('홍길동', 20, '축구');
//getInfo1('홍길동', 20);

function getInfo2(name: string, age: number, hobby?: string): void {
    console.log(name, age, hobby);
}
getInfo2('홍길동', 20, '축구');
getInfo2('홍길동', 20);
//getInfo2('홍길동');































