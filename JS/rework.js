function createTable(){
    let table = document.getElementById('tableResult')
    let tBody = document.getElementById('tbodyResult');

    for(let i = 0; i < 25; i++){
        let tr = tBody.insertRow();
        for(let j = 0; j < 6; j++){
            let td = tr.insertCell();
            td.appendChild(document.createTextNode('----'));
            td.setAttribute("data-axis", `${j}:${i}`);
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

function time(){

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

    let timeForm = document.querySelector('#hour-form').value;
    let timeRegI = document.querySelector('.timeS');
    let timeRegF = document.querySelector('.timeF');
    
    let randomMinutes = '00:' + parseFloat((Math.random() * (53 - 46) + 45).toFixed());
    
    timeRegF.textContent = `Hora de finalización: ${sumMinutes([timeForm, randomMinutes])} HS`;
    timeRegI.textContent = `Hora de inicio: ${timeForm} HS`; 
    
}

function date(){
    let dateForm = document.querySelector('#date-form').value.toString();
    let dateReg = document.querySelector('.date');

    dateReg.textContent = `Fecha: ${dateForm.split('-').reverse().join('-')}`;
}

function arrHidratacion(maxPercent){

    let minPercent = maxPercent - 4.2;
    let arrHidrata = [];
    let sumArr = 0;

    for (let i = 0; i < 20; i++){
        arrHidrata[i] = parseFloat((Math.random() * (maxPercent - minPercent) + minPercent).toFixed(2));
        sumArr += arrHidrata[i];
    }
        
    if((sumArr / 20) > maxPercent){
        arrHidratacion(maxPercent);
    }else{
        return arrHidrata;
    }
}

function arrPrecintos(){
    let arrPrecintos = [];
    const maxPrecinto = parseFloat((Math.random() * (999999 - 1000) + 1000).toFixed());
    const minPrecinto = maxPrecinto - 100;

    for(let i = 0; i < 25; i++){
        arrPrecintos[i] = parseFloat((Math.random() * (maxPrecinto - minPrecinto) + minPrecinto).toFixed());
    }

    return arrPrecintos;
}   


let $generatorReg = document.querySelector('#show-table');

$generatorReg.addEventListener('click', function(){

    let chickenWeightAverage = parseFloat(document.querySelector('#average-chicken-weight').value);
    let customWaterMax = parseFloat(document.querySelector('input[name="custom"]').value);

    //Text max absorption and check if it need to use one of the predefined ones or a custom one.
    let waterMaxForm = parseFloat(document.querySelector('input[name="water-max"]:checked').value) === 100 ?
         customWaterMax : parseFloat(document.querySelector('input[name="water-max"]:checked').value);


    //HideForm();
    createTable();
    //let arrAbsorption = tableWeight(waterMaxForm, chickenWeightAverage);
    time();
    date();

    console.log(arrPrecintos());
    
    for(let x = 0; x < 25; x++){
        let polloNumber = document.querySelector(`td[data-axis = "0:${x}"]`);
        let arrRegPrecintos = document.querySelector(`td[data-axis = "1:${x}"]`);

        polloNumber.textContent = x + 1;
        arrRegPrecintos.textContent = arrPrecintos()[x].toFixed().toLocaleString();
    }
    
    for(let o = 0; o < 20; o++){
        let arrRegHidratacion = document.querySelector(`td[data-axis = "5:${o}"]`);
        arrRegHidratacion.textContent = arrHidratacion(waterMaxForm)[o].toFixed(2).toLocaleString();
    }
}); 

