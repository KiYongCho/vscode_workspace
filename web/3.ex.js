// 실습 1

// 1. 3.ex.csv 파일을 읽어서 각 사람의 이름과 성적합계를 아래와 같이 출력
//     이름,성적합계
//     홍길동,240
//     강감찬,300
//     이순신,150
//     최영,90

// 2. 위 출력 결과를 web/assets/3.ex_sum.csv 파일로 저장

import { readFile, writeFile } from 'fs/promises';

async function csvProcess() {

    const csv = await readFile('web/assets/3.ex.csv', 'utf-8');

    const LINE_CHAR = navigator.platform.toLowerCase().includes('win') ? '\r\n' : '\n';
    const lines = csv.trim().split(LINE_CHAR);

    const headers = lines[0].split(',');

    const data = lines.slice(1).map(line => {
        const values = line.split(',');
        const obj = Object.fromEntries(headers.map((h, i) => [h, values[i]]));
        return obj;
    });

    const sumArr = data.map(obj => obj['이름'] + ',' 
        + (parseInt(obj['국어']) + parseInt(obj['영어']) + parseInt(obj['수학']))
    );

    const outCSV = [['이름', '성적합계'].join(','), ...sumArr].join(LINE_CHAR);

    console.log(outCSV);

    await writeFile('web/assets/3.ex_sum.csv', outCSV, 'utf-8');

}

csvProcess();