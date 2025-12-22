// pubdata_ex.js

let dataList = [];
const arvlCdObj = { '0': '진입', '1': '도착', '2': '출발', '3': '전역출발', '4': '전역진입', '5': '전역도착', '99': '운행중' };

$(function () {

    // 데이터 불러오기
    $('#loadBtn').click(() => {
        fetch('http://swopenapi.seoul.go.kr/api/subway/764e61716572656138386343434a4d/json/realtimeStationArrival/0/100/%EC%97%AD%EC%82%BC')
            .then(resp => resp.json())
            .then(obj => {
                dataList = obj.realtimeArrivalList || [];
                renderList(dataList);
            })
            .catch(err => {
                alert('데이터 로딩 실패!');
                console.error(err);
            });
    });

    
    // 검색
    $('#searchBtn').click(() => {

        if (dataList.length === 0) return;

        const keyword = $('#searchKeyword').val().trim();
        const type = $('#searchSel').val();
        let result = [];

        if (type === '상하행') {
            if (keyword === '상행') {
                result = dataList.filter(d => d.updnLine === '내선');
            } else if (keyword === '하행') {
                result = dataList.filter(d => d.updnLine === '외선');
            } else {
                result = dataList;
            }
        }

        if (type === '방면') {
            result = dataList.filter(d => d.trainLineNm.includes(keyword));
        }

        renderList(result);
    });

    $('#ascBtn').click(() => sortData(true)); // 오름차순

    $('#descBtn').click(() => sortData(false)); // 내림차순

});


// 정렬 함수
function sortData(isAsc) {

    const type = $('#sortSel').val();

    dataList.sort((a, b) => {
        let v1 = '';
        let v2 = '';
        if (type === '상태') {
            v1 = arvlCdObj[a.arvlCd];
            v2 = arvlCdObj[b.arvlCd];
        }
        if (type === '현재위치') {
            v1 = a.arvlMsg3;
            v2 = b.arvlMsg3;
        }
        return isAsc ? v1.localeCompare(v2, 'ko') : v2.localeCompare(v1, 'ko');
    });

    renderList(dataList);

}


// 테이블 출력
function renderList(list) {

    const tbody = $('tbody');
    tbody.empty();

    list.forEach(info => {
        const min = Math.floor(info.barvlDt / 60);
        const sec = info.barvlDt % 60;
        tbody.append(`
            <tr>
                <td>${min}분 ${sec}초</td>
                <td>${info.updnLine === '내선' ? '상행/내선' : '하행/외선'}</td>
                <td>${info.trainLineNm}</td>
                <td>${arvlCdObj[info.arvlCd]}</td>
                <td>${info.arvlMsg3}</td>
                <td>${info.lstcarAt === '1' ? '막차' : '막차아님'}</td>
            </tr>
        `);
    });

    $('#searchKeyword').val('');

}
