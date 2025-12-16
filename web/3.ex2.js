// 실습 2

// web/assets/ssstock.csv
// Data(일자), Open(시가), High(고가), Low(저가), Close(종가), Adj Close(조정종가), Volume(거래량)

// '삼성전자 주가데이터 가져오기' 버튼을 클릭하면 HTML에 주가데이터 표시하기

// 실습 2
// 삼성전자 주가 CSV 데이터를 불러와 테이블로 출력

// 요소 취득
const loadBtn = document.getElementById("loadBtn");
const dataDiv = document.getElementById("dataDiv");

// 버튼 클릭 처리
loadBtn.addEventListener("click", () => {
    fetch("assets/ssstock.csv") // 데이터 로딩
    .then(response => {
        if (!response.ok) throw new Error("CSV 파일 로딩 에러!"); // 응답 에러 처리
        return response.text(); // json은 response.json(), css는 response.text()
    })
    .then(csvText => renderTable(csvText)) // 테이블 표시를 위해 CSV문자열 전달
});

// CSV 문자열을 받아 테이블 표시
function renderTable(csvText) {

    const rows = csvText.trim().split('\n'); // 라인별 배열

    const table = document.createElement("table"); // table 요소 생성

    rows.forEach((row, index) => { // 각 행과 인덱스
        const tr = document.createElement("tr"); // tr 요소 생성
        const cols = row.split(","); // 각 행을 ,로 분리한 배열

        cols.forEach(col => { // 각 행의 열 수만큼 반복
            const cell = document.createElement(index === 0 ? "th" : "td"); // 첫 행인 경우 th, 나머지 td
            cell.textContent = col.replace(/"/g, ""); // " 제거
            tr.appendChild(cell); // tr에 th 또는 td 추가
        });

        table.appendChild(tr); // table에 tr 추가
    });

    dataDiv.innerHTML = ""; // div 초기화
    dataDiv.appendChild(table); // div에 table 추가
}
