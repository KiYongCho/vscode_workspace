// 개별 export
export const name = '홍길동';
export const getName = function() {
    return name;
};

// 일괄 export
// const name = '홍길동';
// const getName = function() {
//     return name;
// };
// export { name, getName }

// 하나의 값만 공개
export default function(a, b) {
    return a + b;
}