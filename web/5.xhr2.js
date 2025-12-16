document.querySelector('#btn').addEventListener('click', e => {

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = e => {

        if (xhr.readyState==4 && (xhr.status==200 || xhr.status==201)) {

            const xmlDoc = xhr.responseXML; // XML 응답

            const persons = xmlDoc.getElementsByTagName('persons')[0];
            
            let html = '<ul>';
            for (let person of persons.children) {
                html += `
                    <li>
                        PID: ${person.getAttribute('pid')},
                        이름: ${person.getElementsByTagName('name')[0].textContent},
                        나이: ${person.getElementsByTagName('age')[0].textContent},
                        주소: ${person.getElementsByTagName('address')[0].textContent}
                    </li>
                `;
            }
            html += '</ul>';

            document.querySelector('#result').innerHTML = html;

        }

    };

    xhr.open('GET', 'assets/persons.xml', true);
    xhr.send();

});