let table = document.getElementById('tableResult')
let tBody = document.getElementById('tbodyResult');

for(let i = 0; i < 24; i++){
    let tr = tBody.insertRow();
    for(let j = 0; j < 5; j++){
        let td = tr.insertCell();
        td.appendChild(document.createTextNode('----'));
    }
}

table.appendChild(tBody);