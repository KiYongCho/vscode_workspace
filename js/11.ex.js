// 객체 실습

// 1. 직원 한 명의 정보를 객체로 만들어 출력
//     객체명: hong, 프라퍼티: (name: '홍길동', age: 30, position: '매니져')
const hong = {
    name: '홍길동',
    age: 30,
    position: '매니져'
};
console.log(hong);

// 2. 프라퍼티 추가 : salary: 3500
hong.salary = 3500;
console.log(hong);

// 3. position 프라퍼티 값을 '총괄매니져'로 변경
hong.position = '총괄매니져';
console.log(hong);

// 4. age 프라퍼티 제거
delete hong.age;
console.log(hong);

// 5. 주소 프라퍼티 추가 : address { city: '서울', gu: '강남구', zip: '05101' }
hong.address = {
    city: '서울',
    gu: '강남구',
    zip: '05101'
};
console.log(hong);

// 6. 주소 프라퍼티 출력
console.log(hong.address);

// 7. 주소 중 구의 값을 '송파구'로 변경
hong.address.gu = '송파구';
console.log(hong.address);

// 8. 새로운 직원을 생성
//     객체명 : kang, 프라퍼티: (name: '강감찬', age: 20, position: '홍보부')
const kang = {
    name: '강감찬',
    age: 20,
    position: '홍보부'
};
console.log(kang);

// 9. 새로운 직원에 주소 프라퍼티 추가 : address { city: '경기도', gu: '분당구', zip: '04101' }
kang.address = {
    city: '경기도',
    gu: '분당구',
    zip: '04101'
};
console.log(kang);

// 10. employee 객체를 생성하여 두 직원을 프라퍼티로 추가 : 프라퍼티명 emp1, emp2
const employee = {
    emp1: hong,
    emp2: kang
};
console.log(employee);

// 11. employee 객체의 프라퍼티인 emp2 객체에 salary: 2500 프라퍼티 추가
employee.emp2.salary = 2500;
console.log(employee.emp2);

// 12. employee 객체내의 두 직원의 급여 합계를 출력
console.log(employee.emp1.salary + employee.emp2.salary);

