// dom 실습 4

/*
  기본데이터
  1 홍길동 100 90 80
  2 강감찬 90 80 70
  3 이순신 80 70 60

  데이터초기화 버튼을 클릭하면 표시된 데이터를 화면에서 삭제
  데이터불러오기 버튼을 클릭하면 기본데이터를 tbody에 표시
  총점출력 버튼을 클릭하면 총점을 연산하여 tfoot에 출력
  * 선택구현
    1. 번호순정렬버튼 
      - 한번 클릭시 번호순 내림차순 정렬
      - 두번 클릭시 번호순 오름차순 정렬
    2. 데이터추가버튼 
      - 데이터를 추가할 수 있는 UI를 동적으로 생성하고 데이터추가버튼 클릭시 tbody내에 추가
      - 데이터 추가시 총점 연산하여 반영
    3. 삭제
*/

// 초기데이터 배열
let studentArr = [
    {num: 1, name: '홍길동', kor: 100, eng: 90, math: 80},
    {num: 2, name: '강감찬', kor: 90, eng: 80, math: 70},
    {num: 3, name: '이순신', kor: 80, eng: 70, math: 60}
];

// 과목별 합계
let sumArr = [0, 0, 0, 0];

// 기본 정렬방식
let sortType = 'desc'; // 내림차순

// 데이터의 마지막 번호
let lastNum = studentArr.length;

// 초기화 함수
const init = () => {
    document.querySelector('tbody').innerHTML = '';
    document.querySelector('tfoot').innerHTML = '';
};

// 출력 함수
const render = studentArr => {
    for (let student of studentArr) { // 배열 내의 객체 수만큼 반복
        const eachRow = `
            <tr>
                <td>${student.num}</td>
                <td>${student.name}</td>
                <td class='score'>${student.kor}</td>
                <td class='score'>${student.eng}</td>
                <td class='score'>${student.math}</td>
                <td class='score'>${student.kor + student.eng + student.math}</td>
                <td>
                    <button class='delBtn' data-num='${student.num}'>삭제</button>
                </td>
            </tr>
        `;
        document.querySelector('tbody').innerHTML += eachRow;
    }

    // 삭제 이벤트리스너 등록
    // delBtn이라는 클래스를 가진 button들을 클릭하면 deleteRow함수에 이벤트객체 전달
    [...document.querySelectorAll('.delBtn')].forEach(delBtn => {
        delBtn.addEventListener('click', e => deleteRow(e));
    });

};

// 합계 연산 함수
const calcSum = () => {
    sumArr = [0, 0, 0, 0]; // 합계 저장 배열을 초기화
    for (let student of studentArr) {
        sumArr[0] += student.kor;
        sumArr[1] += student.eng;
        sumArr[2] += student.math;
        sumArr[3] += student.kor + student.eng + student.math;
    }
    return sumArr;
};

// 합계 출력 함수
const renderSum = sumArr => {
    const sumRow = `
        <tr>
            <th colspan='2'>과목합계</th>
            <td class='score'>${sumArr[0]}</td>
            <td class='score'>${sumArr[1]}</td>
            <td class='score'>${sumArr[2]}</td>
            <td class='score'>${sumArr[3]}</td>
        </tr>
    `;
    document.querySelector('tfoot').innerHTML = sumRow;
};

// 등록
document.querySelector('#registBtn').addEventListener('click', () => {
    // 배열에 입력값들을 객체로 모아서 끝에 추가
    studentArr.push({
        num: ++lastNum, // 번호 생성
        name: document.querySelector('#name').value,
        kor: parseInt(document.querySelector('#kor').value),
        eng: parseInt(document.querySelector('#eng').value),
        math: parseInt(document.querySelector('#math').value)
    });
    init(); // 초기화
    render(studentArr); // 출력
});

// 삭제 함수
const deleteRow = e => {

    // 배열에서 객체를 삭제
    // 배열에 있는 객체들의 num값과 이벤트를 발생시킨 객체의 data-num속성의 다른것들만 추출
    studentArr = studentArr.filter(student => student.num != e.target.dataset.num);

    // tbody에서 삭제할 tr을 찾아서 제거
    document.querySelector('tbody').removeChild(
        // 삭제할 tr 검색
        // [...document.querySelector('tbody').chidren] : tbody내의 tr들로 배열 구성
        // e.target : 삭제 버튼
        // e.target.parentNode.parentNode : 삭제 버튼의 상위 td의 상위 tr, 즉 삭제할 tr
        [...document.querySelector('tbody').children].find(tr => tr==e.target.parentNode.parentNode)
    );

};

// 클릭이벤트리스너 등록

// 데이터초기화
document.querySelector('#initBtn').addEventListener('click', () => {
    init();
});

// 데이터불러오기
document.querySelector('#loadBtn').addEventListener('click', () => {
    init();
    render(studentArr);
});

// 총점출력
document.querySelector('#sumBtn').addEventListener('click', () => {
    renderSum(calcSum(studentArr)); // 총점 연산 후 렌더링
});

// 번호순정렬
document.querySelector('#sortBtn').addEventListener('click', () => {
    init();
    render(studentArr.reverse()); // 배열을 뒤집어서 렌더링
    renderSum(calcSum(studentArr)); // 총점 연산 후 렌더링
});









