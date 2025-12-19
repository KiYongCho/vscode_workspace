const resultDiv = document.querySelector('#resultDiv');

// json-server에 REST GET 요청
axios.get('http://localhost:7777/persons')
.then(resp => {

    // 실습 : resultDiv내에 테이블로 데이터 표시
    
    // resp.data : JSON문자열을 배열로 변환
    const jsonArr = resp.data;

    // table HTML 문자열 생성
    let tableHtml = '<table><tr>';

    // jsonArr[0] : 배열내의 첫번째 객체
    // Object.keys(jsonArr[0]) : 객체의 키들로 구성된 배열
    Object.keys(jsonArr[0]).forEach(th => tableHtml += `<th>${th}</th>`);
    tableHtml += '</tr>';
    jsonArr.forEach(tr => {
        tableHtml += '<tr>';
        // Object.values(tr) : 객체의 값들로 구성된 배열
        Object.values(tr).forEach(td => tableHtml += `<td>${td}</td>`);
        tableHtml += '</tr>';
    });
    tableHtml += '</table>';

    resultDiv.innerHTML = tableHtml;

})
.catch(err => {
    alert('요청 에러 발생!');
});