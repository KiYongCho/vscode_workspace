// lotto 구현

/*
    [등수]
    1등 : 컴퓨터 6개 번호와 사용자 6개 일치
    2등 : 컴퓨터 5개 번호와 사용자 5개 일치, 보너스번호 맞으면
    3등 : 컴퓨터 5개 번호와 사용자 5개 일치
    4등 : 컴퓨터 4개 번호와 사용자 4개 일치
    5등 : 컴퓨터 3개 번호와 사용자 3개 일치
    꽝 : 나머지

    [기능]
    - 사용자의 로또번호 6개 생성
    - 컴퓨터의 로또번호 7개 생성 (6개 + 보너스번호 1개)
    - 추첨은 100번 수행
    - 등수별 당첨회수를 출력
    - 출력형식 (회수마다 출력)
      *****************************************
      [추첨회수 : 1]
      컴퓨터의 로또번호 : 32 44 16 21 5 8 보너스 9
      사용자의 로또번호 : 42 45 18 19 7 4
      1등:X번, 2등:X번, 3등:X번, 4등:X번, 5등:X번, 꽝:X번
      *****************************************
*/

const lottoGame = {

    GAME_COUNT: 10000, // 게임 회수
    bonusNum: 0, // 보너스 추첨 번호
    rankCountArr: [0, 0, 0, 0, 0, 0], // 등수별 당첨회수 (1, 2, 3, 4, 5, 꽝)

    // 로또번호 생성 메소드
    getLottoNums: userType => {
        const lottoNums = new Set(); // 생성한 로또번호 저장 Set
        while (lottoNums.size<6) { // 6개
            lottoNums.add(Math.floor(Math.random()*45) + 1); // 로또번호 추가
        }
        if (userType=='com') { // 컴퓨터인 경우
            while (!lottoNums.has(lottoGame.bonusNum)) { // 보너스번호가 없으면
                lottoGame.bonusNum = Math.floor(Math.random()*45) + 1; // 보너스번호 생성
                break;
            }
        }
        return [Array.from(lottoNums), lottoGame.bonusNum]; // 생성한 번호들과 보너스번호 반환
    },

    // 맞춘 개수 연산 메소드
    getCorrCount: () => {
        userNums = lottoGame.getLottoNums('user')[0];
        let corrCount = 0; // 맞춘 번호 개수
        for (let i=0; i<6; i++) {
            for (let j=0; j<6; j++) {
                if (userNums[i]==comNums[j]) { // 맞춘 번호 카운트 증가
                    corrCount++;
                    break;
                }
            }
        }
        return corrCount; // 맞춘 개수 반환
    },

    // 등수 연산 메소드
    getRank: () => {
        switch (lottoGame.getCorrCount(lottoGame.getLottoNums())) {
            case 6: lottoGame.rankCountArr[0]++; break;
            case 5: {
                if (userNums.includes(bonusNum)) lottoGame.rankCountArr[1]++; // 2등은 5개가 맞고 보너스번호 맞음
                else lottoGame.rankCountArr[2]++;
                break;
            }
            case 4: lottoGame.rankCountArr[3]++; break;
            case 3: lottoGame.rankCountArr[4]++; break;
            default: lottoGame.rankCountArr[5]++;
        }
    },

    // 게임결과 출력 메소드
    printResult: () => {
        for (let i=0; i<lottoGame.GAME_COUNT; i++) {
            console.log(`[추첨회수 : ${i+1}]`);
            console.log(`컴퓨터의 로또번호 : ${comNums}, 보너스번호 ${lottoGame.bonusNum}`);
            console.log(`사용자의 로또번호 : ${lottoGame.getLottoNums("user")[0]}`);
            lottoGame.getRank(); // 순위 구하기
            for (let i=0; i<lottoGame.rankCountArr.length; i++) {
                console.log(`${(i+1)>5 ? '꽝' : (i+1)+'등'}: ${lottoGame.rankCountArr[i]}번 (${((lottoGame.rankCountArr[i]/lottoGame.GAME_COUNT)*100).toFixed(4)+'%'})`);    
            }
            console.log(`*****************************************`);
        }
    }

};

// 컴퓨터 추첨 번호 6개
const comNums = lottoGame.getLottoNums("com")[0];

// 게임결과 출력
lottoGame.printResult();