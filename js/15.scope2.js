var v = 1; // 전역 변수

function outer() {
    console.log(v); // 1, 전역변수 v, outer 함수스코프에 선언된 v가 없으므로 스코프 체인을 타고 올라가서 전역 변수 v 사용
    v = 3; // 전역변수 v의 값을 3으로 변경
    console.log(v); // 3, 전역변수 v
    function inner() {
        // var v;
        console.log(v); // undefined, inner 함수의 지역변수, inner 함수 스코프내에서 선언이 하단에 되어 있으므로 호이스팅됨
        var v = 5; // inner 함수의 지역변수
        console.log(v); // 5, inner 함수의 지역변수
    }
    inner();
}

outer();

console.log(v); // 3, 전역변수

// 스코프 체이닝 순서 : inner > outer > global

// 코드 실행 순서 : global > outer > inner