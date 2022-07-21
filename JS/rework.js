let table = document.getElementById('tableResult')
let tBody = document.getElementById('tbodyResult');

for(let i = 0; i < 25; i++){
    let tr = tBody.insertRow();
    for(let j = 0; j < 6; j++){
        let td = tr.insertCell();
        td.appendChild(document.createTextNode('1234'));
    }
}

table.appendChild(tBody);
