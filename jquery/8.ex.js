// 실습 : jQuery와 axios 활용해서 CSV, JSON, XML 데이터 로딩

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


