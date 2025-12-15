/*
    CSV 읽고/쓰기
*/

import { readFile, writeFile } from 'fs/promises';

async function csvProcess() {

    // 파일 읽어서 저장, 인코딩은 utf-8
    const csv = await readFile('web/assets/persons.csv', 'utf-8');
    // console.log(csv);

    // 윈도우는 줄바꿈 문자가 \r\n, 리눅스/유닉스/맥 \n
    const LINE_CHAR = navigator.platform.toLowerCase().includes('win') ? '\r\n' : '\n';
    const lines = csv.trim().split(LINE_CHAR); // 줄바꿈 문자 기준으로 잘라서 배열로 변환
    // console.log(lines);

    const headers = lines[0].split(','); // 제목 열 배열
    // console.log(headers);

    const data = lines.slice(1).map(line => { // 제목 제외한 아래 라인들 각각에 대해 객체로 리턴
        const values = line.split(','); // 한 줄의 데이터를 ,로 잘라서 배열로
        // 열이름과 열의 데이터로 객체 생성
        const obj = Object.fromEntries(headers.map((h, i) => [h, values[i]]));
        // console.log(obj);
        return obj;
    });

    // 30살 이상만 추출
    const filtered = data.filter(person => Number(person.age) >= 30);

    // CSV 형식으로 다시 변환
    const outCSV = [headers.join(','), ...filtered.map(obj => Object.values(obj).join(','))].join(LINE_CHAR);
    // console.log(outCSV);

    // CSV문자열을 파일에 저장
    await writeFile('web/assets/persons30over.csv', outCSV, 'utf-8');

}

csvProcess();