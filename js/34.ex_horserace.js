// 레인 수
const LANES = 5;

const HORSE_GIF_URL = "/js/assets/horse.gif";

// setInterval 간격(ms) / 속도 범위(px per tick)
const TICK_MS = 30;
const SPEED_MIN = 1.6;
const SPEED_MAX = 4.2;

// 스퍼트(가끔 속도 상승) 확률
const BOOST_PROB = 0.06;
const BOOST_MIN = 1.0;
const BOOST_MAX = 2.4;

// ====== DOM ======
const lanesEl = document.getElementById("lanes");
const timeEl = document.getElementById("time");
const statusEl = document.getElementById("status");
const rankboardEl = document.getElementById("rankboard");

const btnStart = document.getElementById("btnStart");
const btnReset = document.getElementById("btnReset");

const trackEl = document.getElementById("track");

// ====== 상태 ======
let timerId = null;
let startAt = 0;
let elapsed = 0;

// 말 상태 배열
// { laneNo, x, speed, finished, finishTime, el }
const horses = [];

// ====== 유틸 ======
const rand = (min, max) => Math.random() * (max - min) + min;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// 결승선 x 위치(픽셀) 계산
function getFinishX(){
    // track 내부 좌표계: trackEl의 좌측 기준
    // finish-line은 left: calc(100% - 110px) + width(10px)
    // 여기서는 "도착선 가운데"를 finishX로 잡습니다.
    const rect = trackEl.getBoundingClientRect();
    const finishX = rect.width - 110; // CSS와 맞춤 (finish-line left)
    return finishX;
}

function getStartX(){
    return 110; // CSS와 맞춤 (start-line left)
}

// 등수판 갱신
function renderRankboard(){
    const finished = horses
    .filter(h => h.finished)
    .sort((a,b) => a.finishTime - b.finishTime);

    const chips = rankboardEl.querySelectorAll(".chip");
    for(let i=0;i<LANES;i++){
    const chip = chips[i];
    const h = finished[i];
    chip.innerHTML = `<strong>${i+1}등</strong> ${h ? ("레인 " + h.laneNo) : "-"}`;
    }
}

// 말 요소 생성
function makeHorse(laneNo){
    const horse = document.createElement("div");
    horse.className = "horse";
    horse.dataset.lane = String(laneNo);

    horse.textContent = "";
    const img = document.createElement("img");
    img.src = HORSE_GIF_URL;
    img.alt = `horse lane ${laneNo}`;
    horse.appendChild(img);

    return horse;
}

// 레인 그리기
function buildLanes(){
    lanesEl.innerHTML = "";
    horses.length = 0;

    for(let i=1;i<=LANES;i++){
    const lane = document.createElement("div");
    lane.className = "lane";

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = i;

    lane.appendChild(label);

    // 말 배치 (세로 중앙)
    const horseEl = makeHorse(i);
    horseEl.style.top = "50%";
    horseEl.style.transform = "translate(-50%, -50%)";
    horseEl.style.left = getStartX() + "px";

    lane.appendChild(horseEl);
    lanesEl.appendChild(lane);

    horses.push({
        laneNo: i,
        x: getStartX(),
        speed: rand(SPEED_MIN, SPEED_MAX),
        finished: false,
        finishTime: null,
        el: horseEl
    });
    }

    renderRankboard();
    timeEl.textContent = "0.00";
    statusEl.textContent = "READY";
}

function stopRace(){
    if(timerId){
    clearInterval(timerId);
    timerId = null;
    }
    btnStart.disabled = false;
}

function startRace(){
    if(timerId) return;

    // 초기화
    elapsed = 0;
    startAt = performance.now();
    statusEl.textContent = "RACING";
    btnStart.disabled = true;

    // 매 틱마다 이동
    timerId = setInterval(() => {
    const now = performance.now();
    elapsed = (now - startAt) / 1000;
    timeEl.textContent = elapsed.toFixed(2);

    const finishX = getFinishX();

    // 이동 로직
    for(const h of horses){
        if(h.finished) continue;

        // 가끔 스퍼트
        let v = h.speed;
        if(Math.random() < BOOST_PROB){
        v += rand(BOOST_MIN, BOOST_MAX);
        }

        // 약간의 랜덤 흔들림(게임 느낌)
        v += rand(-0.35, 0.35);
        v = clamp(v, 0.6, 7.5);

        h.x += v;

        // 도착 판정(도착선 x 도달)
        if(h.x >= finishX){
        h.x = finishX;
        h.finished = true;
        h.finishTime = elapsed;
        }

        // DOM 반영
        h.el.style.left = h.x + "px";
    }

    // 등수판 갱신
    renderRankboard();

    // 모두 도착하면 종료
    const allFinished = horses.every(h => h.finished);
    if(allFinished){
        statusEl.textContent = "FINISHED";
        stopRace();
    }
    }, TICK_MS);
}

function resetRace(){
    stopRace();
    buildLanes();
}

// ====== 이벤트 ======
btnStart.addEventListener("click", startRace);
btnReset.addEventListener("click", resetRace);

// 리사이즈 시 결승선 위치가 변하므로, 말의 위치도 비율 유지가 필요하지만
// 교육용 단순 버전은 리셋으로 처리 (원하면 비율 재계산 버전도 가능)
window.addEventListener("resize", () => {
    // 경기 중이면 리셋 (UI 깔끔 유지)
    if(timerId) resetRace();
});

// 시작 시 초기 렌더
buildLanes();