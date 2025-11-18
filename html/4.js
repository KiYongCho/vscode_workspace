// btn이라는 아이디를 가진 버튼을 클릭하면 '버튼을 클릭하셨군요!'라는 앨럿 메세지를 띄우는 코드
window.onload = function() {
    this.document.querySelector('#btn').addEventListener('click', function() {
        alert('버튼을 클릭하셨군요!');
    });
};