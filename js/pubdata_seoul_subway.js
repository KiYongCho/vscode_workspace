document.querySelector('button').addEventListener('click', e => {
    fetch('http://swopenapi.seoul.go.kr/api/subway/764e61716572656138386343434a4d/json/realtimeStationArrival/0/100/%EC%97%AD%EC%82%BC')
    .then(resp => resp.json())
    .then(obj => {
        const arrivalList = obj.realtimeArrivalList;
        const tbody = document.querySelector('tbody');
        let html = '';
        const arvlCdObj = { '0': '진입', '1': '도착', '2': '출발', '3': '전역출발', '4': '전역진입', '5': '전역도착', '99': '운행중' };
        arrivalList.forEach(eachInfo => {
            const barvlMinuite = Math.floor(eachInfo.barvlDt/60); 
            const barvlSecond = eachInfo.barvlDt%60;
            html += `
                <tr>
                    <td>${barvlMinuite + '분 ' + barvlSecond + '초'}</td>
                    <td>${eachInfo.bstatnNm}</td>
                    <td>${arvlCdObj[eachInfo.arvlCd]}</td>
                    <td>${eachInfo.lstcarAt==1 ? '막차' : '막차아님'}</td>
                </tr>
            `;
        });
        tbody.innerHTML = html;
    });
});