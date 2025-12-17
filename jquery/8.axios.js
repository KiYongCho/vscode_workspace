$(function() {

    $('#btn1').click(e => {

        // axios GET요청
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });

    })

    $('#btn2').click(e => {

        // axios POST요청
        axios
        .post(
            'https://jsonplaceholder.typicode.com/posts', 
            {
                userId: 11,
                title: '신규POST제목',
                body: '신규POST내용'
            }
        )
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });        

    })

});