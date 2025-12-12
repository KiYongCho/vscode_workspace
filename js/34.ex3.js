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

let numArr = []; // 1~100까지 정수 저장할 배열
let selArr = [] // 선택한 정수들 저장할 배열

for (let i=1; i<=100; i++) numArr.push(i); // 배열에 1~100까지 입력

numArr = shuffleArray(numArr); // 배열 임의순서로 섞음

// table HTML 생성
let tableHtml = '<table><tbody>';
for (let i=0; i<10; i++) { // 10행
    tableHtml += '<tr>';
    for (let j=0; j<10; j++) { // 10열
        // 배열의 각 인덱스를 순회해서 td를 생성
        tableHtml += `<td>${numArr[10*i + j]}</td>`;
    }
    tableHtml += '</tr>';
}
tableHtml += '</tbody></table>';

// 하단 HTML 생성
let bottomHtml = '<p><button>합계</button>&nbsp;<input type="text"></p>';

// body에 생성한 HTML 추가
document.querySelector('body').innerHTML = tableHtml + bottomHtml;

// table 클릭 처리
document.querySelector('table').addEventListener('click', e => {
    e.target.style.backgroundColor = 'red'; // 이벤트 위임 : td에서 발생한 이벤트를 table이 처리
    e.target.style.color ='white'; // td내의 글자색
    const selNum = parseInt(e.target.textContent); // 클릭한 td내 텍스트를 정수로
    if (selArr.indexOf(selNum)<0) selArr.push(selNum); // 선택번호 저장 배열에 번호가 없다면 추가
});

// 합계 button 클릭 처리
document.querySelector('button').addEventListener('click', e => {
    document.querySelector('input[type="text"]').value
        = selArr.reduce((acc, curr) => {return acc + curr;}, 0);
});



























