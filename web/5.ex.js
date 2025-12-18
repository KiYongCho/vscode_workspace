// AJAX 데이터 로딩 실습

// CSV : https://raw.githubusercontent.com/datasets/population/master/data/population.csv
// JSON : https://jsonplaceholder.typicode.com/posts
// XML : https://www.w3schools.com/xml/plant_catalog.xml

// 각 버튼을 누르면 위 포맷별 URL을 AJAX GET요청해서
// 아이디가 resultDiv인 div내에 테이블을 생성해서 데이터를 렌더링

// 엔드포인트
const endPoints = {
    CSV : 'https://raw.githubusercontent.com/datasets/population/master/data/population.csv',
    JSON : 'https://jsonplaceholder.typicode.com/posts',
    XML : 'https://www.w3schools.com/xml/plant_catalog.xml'
};

// 결과표시 DIV
const resultDiv = document.querySelector('#resultDiv');

// 클릭 이벤트 처리
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', e => ajaxRequest(e.target.id, endPoints[e.target.id]));
});

// AJAX 요청
const ajaxRequest = (format, url) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = e => {
        if (xhr.readyState==4 && xhr.status==200) {
            getArr(format=='XML' ? [format, xhr.responseXML] : [format, xhr.responseText]);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
};

// 데이터 배열 획득
const getArr = resultArr => {

    // CSV, JSON, XML 에 따라서 데이터 배열을 별도로 생성
    switch(resultArr[0]) {

        case 'CSV': {
            // OS에 따른 줄바꿈 문자
            const LINE_CHAR = navigator.platform.toLowerCase().includes('win') ? '\r\n' : 'n';
            // 줄바꿈 문자를 기준으로 CSV문자열을 분리해서 배열로 생성
            const lines = resultArr[1].trim().split(LINE_CHAR);
            // 컬럼명들의 배열
            const headers = lines[0].split(',');
            // 행들의 배열 각각에 대해 map함수 적용
            const data = lines.slice(1).map(line => {
                const values = line.split(','); // 각 행 컬럼값들의 배열
                // 컬럼명을 프라퍼티키로하고 컬럼값을 프라퍼티값으로 하는 객체
                return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
            });
            createTable([headers, data]);
            break;
        }
        case 'JSON': {
            // 컬럼명들의 배열
            const headers = Object.keys(JSON.parse(resultArr[1])[0]);
            // JSON문자열을 Javascript객체로 변환한 후에 각각의 객체들에 대해 키에 해당하는 값들의 배열을 생성
            const data = JSON.parse(resultArr[1]).map(obj => headers.map(key => obj[key]));
            createTable([headers, data]);
            break;
        }
        case 'XML': {
            // XMLDOcument의 루트엘리먼트
            const catalog = resultArr[1].getElementsByTagName('CATALOG')[0];
            // PLANT엘리먼트들의 배열
            const plants = Array.from(catalog.getElementsByTagName('PLANT'));
            const headers = Array.from(plants[0].children).map(child => child.tagName);
            const data = plants.map(plant => Array.from(plant.children).map(each => each.textContent));
            createTable([headers, data]);
        }

    }

};

// 테이블 렌더링
const createTable = trs => {

    // resultDiv 초기화
    resultDiv.innerHTML = '';

    // 헤더 행
    let tableHtml = '<table><tr>';
    trs[0].forEach(th => { tableHtml += `<th>${th}</th>`; });
    tableHtml += '</tr>';

    // 데이터 행
    trs[1].forEach(tr => {
        tableHtml += '<tr>';
        Object.values(tr).forEach(td => {
            tableHtml += `<td>${td}</td>`;
        });
        tableHtml += '</tr>';
    });

    tableHtml += '</table>';

    resultDiv.innerHTML = tableHtml;

};






