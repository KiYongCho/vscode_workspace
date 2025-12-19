const resultDiv = document.querySelector('#resultDiv');

// json-server에 REST POST 요청
axios.post(
    'http://localhost:7777/persons',
    {
        id: '4',
        name: 'wang sun sin',
        age: 77
    }
)
.then(resp => {

    const jsonObj = resp.data;

    let tableHtml = '<table><tr>';

    Object.keys(jsonObj).forEach(th => tableHtml += `<th>${th}</th>`);
    tableHtml += '</tr><tr>';
    Object.values(jsonObj).forEach(td => { tableHtml += `<td>${td}</td>`; });
    tableHtml += '</tr></table>';

    resultDiv.innerHTML = tableHtml;

})
.catch(err => {
    alert('요청 에러 발생!');
});