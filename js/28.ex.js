// 실습 1

// 원격지 JSON 서버에서 JSON데이터 획득
// [
//   { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
//   {
//     userId: 1,
//     id: 2,
//     title: 'quis ut nam facilis et officia qui',
//     completed: false
//   },
//   { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
//   { userId: 1, id: 4, title: 'et porro tempora', completed: true },
//   ...
// ]
fetch('https://jsonplaceholder.typicode.com/todos') // 할일목록 JSON
    .then(response => response.json())
    .then(json => {

        // console.log(json);

        // 1. 모든 id를 추출하여 출력
        json.forEach(obj => {
            const {id} = obj;
            console.log(id);
        });

        // 2. completed가 true인 객체들의 개수 출력
        let cnt = 0;
        json.forEach(obj => {
            const {completed} = obj;
            if (completed) cnt++;
        });
        console.log(`completed : ${cnt} 개`);

        // 1, 2 통합버젼
        let cnt2 = 0;
         json.forEach(obj => {
            const {id, completed} = obj;
            console.log(id);
            if (completed) cnt2++;
        });
        console.log(`completed : ${cnt2} 개`);

    })


// 실습 2

// 모든 사용자 정보를 아래 형식으로 출력
// *************************************************************
// [1번]
// Bret (Leanne Graham, Sincere@april.biz, 1-770-736-8031 x56442)
// 주소 : Kulas Light Apt. 556 Gwenborough (92998-3874) [-37.3159, 81.1496]
// 웹사이트 : hildegard.org
// 회사 : Romaguera-Crona, harness real-time e-markets
// *************************************************************
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {

        console.log(json[0]);

        // code here
        for (obj of json) {

            const {
                id, name, username, email,
                address:{street, suite, city, zipcode, geo:{lat, lng}},
                phone, website,
                company:{name:companyName, bs}
            } = obj;

            console.log(`***************************************************`);
            console.log(`[${id}번]`);
            console.log(`${username} (${name}, ${email}, ${phone})`);
            console.log(`주소 : ${street} ${suite} ${city} (${zipcode}) [${lat}, ${lng}]`);
            console.log(`웹사이트 : ${website}`);
            console.log(`회사 : ${companyName}, ${bs}`);
            console.log(`***************************************************`);
        }

    })


