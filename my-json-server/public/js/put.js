const resultDiv = document.querySelector('#resultDiv');

// json-server에 REST PUT 요청
axios.put(
    'http://localhost:7777/persons/4',
    {
        name: 'kwon yul',
        age: 88
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