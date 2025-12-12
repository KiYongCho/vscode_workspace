// 이벤트 실습 4 : 폼 필드 유효성 검증 (form field validation)

// 전송버튼을 클릭하면...
// 1. 아이디와 비밀번호는 12자 이하, 필수 입력, 중간에 공백문자 불허
// 2. 성별은 필수 체크
// 3. 취미는 2개 이상 선택
// 4. 자기소개 필수 입력
// 조건을 모두 만족하면 '폼이 전송되었습니다!' alert
// 그렇지 않으면 해당 필드에 포커스

const re12 = /^\S{1,12}$/; // 12자 이하의 비공백문자 정규표현식 패턴

// 아이디가 submit인 버튼 클릭하면
document.querySelector('#submit').addEventListener('click', () => {

    // 1. 아이디 체크
    const uid = document.querySelector("input[name='uid']");
    if (!re12.test(uid.value)) {
        alert('아이디는 공백 없이 12자 이하로 입력하세요!');
        uid.focus();
        return;
    }

    // 2. 비밀번호 체크
    const upass = document.querySelector("input[name='upass']");
    if (!re12.test(upass.value)) {
        alert('비밀번호는 공백 없이 12자 이하로 입력하세요!');
        upass.focus();
        return;
    }    

    // 3. 성별 체크
    const gender = document.querySelectorAll("input[name='gender']:checked");
    if (gender.length==0) {
        alert('성별을 선택하세요!');
        return;
    }

    // 4. 취미 체크
     const hobby = document.querySelectorAll("input[type='checkbox']:checked");
    if (hobby.length<2) {
        alert('취미는 2개 이상 선택하세요!');
        return;
    }

    // 5. 자기소개 체크
    const intro = document.querySelector("textarea");
    if (!/\S+/.test(intro.value)) {
        alert("자기소개를 입력하세요");
        intro.focus();
        return;
    }

    // document.querySelector("form").submit();
    alert("폼이 전송되었습니다!");    

});
