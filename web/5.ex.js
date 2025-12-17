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
            render(format=='XML' ? [format, xhr.responseXML] : [format, xhr.responseText]);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
};

// 데이터 렌더링
const render = resultArr => {
    switch (resultArr[0]) {
        case 'CSV': {
            resultDiv.textContent = resultArr[1];
            break;
        }
        case 'JSON': {
            resultDiv.textContent = resultArr[1];
            break;
        }
        case 'XML': {
            resultDiv.textContent = resultArr[1];
        }
    }
};





