function createTable(){
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
}

function HideForm(){
    let displayReg = document.querySelector('.reg');
    let displayForm = document.querySelector('.form');

    displayReg.style.display = 'grid';
    displayForm.style.display = 'none';
}

function timeDate(){

    let sumMinutes = function(values){
        const validate = time =>{
            if(time > 59 || time < 0){
                throw new Error(
                    "Hours, minutes and seconds values have to be between 0 and 59."
                );
            }
            return time;
        };
    
        const seconds = values
            .map(e => validate(Number(e.split(":").reverse()[0])))
            .reduce((a, b) => a + b);
    
        let minutes = values
            .map(e => validate(Number(e.split(":").reverse()[1])))
            .reduce((a, b) => a + b);
    
        let hours = values
            .map(e =>
            e.split(":").reverse()[2] ? Number(e.split(":").reverse[2]) : 0)
            .reduce((a, b) => a + b);
    
        minutes *= 60;
        hours *= 3600;
    
        let result = new Date((hours + minutes + seconds) * 1000)
            .toISOString()
            .substr(11, 8);
    
        return result.split(":").reverse()[2] === "00" ? result.slice(3) : result;
    }

    let timeForm = document.querySelector('#hour-test').value;
    let timeRegI = document.querySelector('.timeS');
    let timeRegF = document.querySelector('.timeF');
    
    let randomMinutes = '00:' + parseFloat((Math.random() * (53 - 46) + 45).toFixed());
    
    timeRegF.textContent = `Hora de finalización: ${sumMinutes([timeForm, randomMinutes])} HS`;
    timeRegI.textContent = `Hora de inicio: ${timeForm} HS`; 
    
}



let $generatorREG = document.querySelector('#show-table');

$generatorREG.addEventListener('click', function(){
    HideForm();
    createTable();
    timeDate();
});