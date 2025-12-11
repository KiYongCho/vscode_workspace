// event 실습 3

// 10행 10열의 테이블을 만들고 각 칸에 1~100의 수 중 임의의 수를 넣음
// 숫자를 2개 이상 선택하고 합계버튼을 누르면 수의 합계를 출력

// Fisher-Yates Shuffle Algorithm (배열내의 요소 섞는 알고리즘)
function shuffleArray(array) {
  for (let i=array.length-1; i>0; i--) { // 인덱스를 거꾸로 순회
    const j = Math.floor(Math.random()*(i+1)); // 임의의 인덱스 획득
    [array[i], array[j]] = [array[j], array[i]]; // 인덱스 교환
  }
  return array; // 섞인 배열을 반환
}

let numArr = []; // 1~100까지 정수 저장 배열
let selArr = []; // 선택한 정수들 저장 배열

for (let i=1; i<=100; i++) numArr.push(i); // 배열에 1~100까지 입력
numArr = shuffleArray(numArr); // 배열 섞음

// table HTML 생성
let tableHtml = '<table><tbody>';
for (let i=0; i<10; i++) { // 행의 수만큼 반복
    tableHtml += '<tr>'; // 행 시작시 <tr> 추가
    for (let j=0; j<10; j++) { // 열의 수만큼 반복
        tableHtml += `<td>${numArr[10*i+j]}</td>`; // 열마다 td 추가, 섞인 배열요소 값 추가
    }
    tableHtml += '</tr>'; // 행 종료시 </tr> 추가
}
tableHtml += '</tbody></table>';

// body에 생성한 table HTML 추가, 합계버튼 추가, 합계 표시할 입력상자 추가
document.body.innerHTML 
    = tableHtml + "<p><button>합계</button>&nbsp;<input type='text'></p>";

// table 클릭하면
document.querySelector('table').addEventListener('click', e => {
    e.target.style.backgroundColor = 'red'; // 클릭한 td의 배경색 변경
    e.target.style.color = 'white'; // 클릭한 td의 글자색 변경
    const selNum = parseInt(e.target.textContent); // 클릭한 td의 문자열을 숫자로
    if (selArr.indexOf(selNum)<=-1) selArr.push(selNum); // 배열에 없다면 추가
});

// button 클릭하면
document.querySelector('button').addEventListener('click', e => {
    // 입력상자에 배열의 합계를 표시
    document.querySelector("input[type='text']").value 
        = selArr.reduce((acc, curr) => { return acc + curr; }, 0);
});