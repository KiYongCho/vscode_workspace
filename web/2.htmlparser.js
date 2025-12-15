// CORS Unblock 크롬 확장프로그램 설치 후 실행
// 크롬 > 설정 > 확장프로그램 > Chrome Web Store 방문하기 > CORS Unblock 검색 후 크롬에 추가
// 웹페이지 구동 > CORS Unblock 실행

// 네이버 언론사별 랭킹뉴스
// https://news.naver.com/main/ranking/popularDay.naver
// 1. 랭킹뉴스 웹페이지의 HTML을 불러온다.
// 2. 언론사명, 언론사별 뉴스제목(5개씩)을 JSON문자열로 생성한다.
// 3. 버튼을 누르면 언론사명, 언론사별 뉴스제목을 테이블로 출력한다.
// 4. 뉴스제목 클릭시 해당 뉴스로 이동한다.

// 아이디가 loadBtn인 버튼 클릭하면 비동기 콜백 수행
document.getElementById('loadBtn').addEventListener('click', async () => {

    // 웹사이트 접속해서 데이터를 모두 가져오면 response에 저장
    const response = await fetch('https://news.naver.com/main/ranking/popularDay.naver');

    // response에서 배열버퍼를 뽑아내서 euc-kr로 인코딩된 문자열 반환
    const text = new TextDecoder("euc-kr").decode(await response.arrayBuffer());
    // console.log(text); // 접속URL의 HTML코드

    // HTML DOM을 해석하는 DOMParser 생성
    const parser = new DOMParser();
    // text를 HTML DOM으로 해석해서 document객체 획득
    const doc = parser.parseFromString(text, 'text/html');
    // console.log(doc); // HTML문서의 document객체

    // 언론사명, 뉴스들 저장 배열
    const newsData = [];

    // 클래스가 rankingnews_box인 요소들
    const mediaSections = doc.querySelectorAll('.rankingnews_box'); // 언론사별 박스

    mediaSections.forEach(section => {
        const mediaName = section.querySelector('.rankingnews_name')?.textContent.trim(); // 언론사명
        const articles = Array.from(section.querySelectorAll('ul.rankingnews_list > li')).slice(0, 5); // ul 하위 li 5개

        // li마다 가진 a요소의 title과 href 속성 값을 객체로 반환
        const newsList = articles.map(li => {
            const a = li.querySelector('a');
            const title = a?.textContent.trim();
            const href = a?.href;
            return { title, link: href };
        });

        // 배열에 언론사명과 반환받은 객체를 푸시
        newsData.push({ media: mediaName, articles: newsList });
        // console.log(newsData);

    });

    // 출력
    const tableEl = document.createElement('table'); // table 요소 생성
    const thead = `<thead><tr><th>언론사</th><th>뉴스 제목 (Top 5)</th></tr></thead>`; // 제목 라인

    // tbody 생성
    let tbody = '<tbody>';
    newsData.forEach(item => {
        const articleLinks = item.articles.map(a =>
            `<div><a href="${a.link}" target="_blank">${a.title}</a></div>`).join('');
        tbody += `<tr><td>${item.media}</td><td>${articleLinks}</td></tr>`;
    });
    tbody += '</tbody>';

    // table에 thead와 tbody 삽입
    tableEl.innerHTML = thead + tbody;

    // 문서에 table 붙임
    document.getElementById('newsTable').innerHTML = ''; // 초기화
    document.getElementById('newsTable').appendChild(tableEl); // 생성한 HTML 추가

});
