// 실습 : REST API

// - json server 사용
//   (npx json-server --watch studentscore.json --port 7777 --static ./public)
// - REST API 사용
// - axios 사용

// 1. 데이터가져오기 버튼 클릭 > 테이블에 데이터 렌더링
// 2. 아이디, 이름, 국어, 영어, 수학 입력 후 등록 버튼 클릭 > 데이터 등록하고 테이블 리렌더링

// [3~6 주말과제 : 일요일 오후 12시까지 '이름_rest.zip' 제출]
// 3. 학생별 총점/평균 열 추가
// 4. 데이터가져오기 버튼 옆에 '과목별총점' 버튼 추가하고 누르면 과목별 총점 행 추가
// 5. 각 학생의 국어/영어/수학 점수 수정 기능 추가
// 6. 각 학생 데이터 삭제 기능

const ENDPOINT = 'http://localhost:7777/studentscore';

let dataArr = [];

// 데이터 가져오기 버튼 클릭
$('#getDataBtn').click(e => {
    $(e.target).prop('disabled', true);
    getData();
});

// 등록 버튼 클릭
$('#regBtn').click(e => {
    axios.post(
        ENDPOINT,
        {
            id: $("input[type='text']").eq(0).val(),
            name: $("input[type='text']").eq(1).val(),
            score: {
                kor: parseInt($("input[type='text']").eq(2).val()),
                math: parseInt($("input[type='text']").eq(3).val()),
                eng: parseInt($("input[type='text']").eq(4).val())
            }
        }
    )
    .then(resp =>  getData())
});

// 데이터 가져오기
const getData = () => {
    axios.get(ENDPOINT)
    .then(resp => {
        $('#btnP').append('&nbsp;<button id="getTotalBtn" onclick="renderTotal();">과목별총점</button>');
        dataArr = resp.data;
        renderTable(dataArr);
    });
};

// 테이블 렌더링
const renderTable = () => {
    $('table thead, table tbody').innerHTML = '';
    $('thead').html('<tr><th>아이디</th><th>이름</th><th>국어</th><th>영어</th>'
        + '<th>수학</th><th>총점</th><th>평균</th></tr>');
    let trs = '';
    dataArr.forEach(tr => {
        trs += '<tr>';
        let studentSum = 0;
        Object.values(tr).forEach((td, i) => {
            if (i!=2) trs += `<td>${td}</td>`;
            else Object.values(td).forEach(td => {
                trs += `<td>${td}</td>`;
                studentSum += parseInt(td);
            });
        });
        trs += `<td>${studentSum}</td>`;
        trs += `<td>${(studentSum/3).toFixed(2)}</td>`;        
        trs += '</tr>';
    });
    $('tbody').html(trs);
};

// 과목별총점 렌더링
const renderTotal = () => {
    const totalArr = [0, 0, 0];
    dataArr.forEach(data => {
        const scoreArr = Object.values(data.score);
        totalArr[0] += scoreArr[0];
        totalArr[1] += scoreArr[1];
        totalArr[2] += scoreArr[2];
    });
    const tr = `<tr><td colspan="2" class="center">과목별총점</td><td>${totalArr[0]}</td>'
        + '<td>${totalArr[1]}</td><td>${totalArr[2]}</td><td colspan="2"></td></tr>`;
    $('tfoot').html(tr);
};
