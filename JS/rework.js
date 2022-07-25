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

function arrHidratacion(maxPercentage){
    let arrHidrata = [];
    let sum = 0;
    let promedio = 0;
    let n = false;

    while(n == false){
        let maxPercent = maxPercentage * 1.8; 
        let minPercent = maxPercentage - 4.2;
        arrHidrata = [];
        sum = 0;
        promedio = 0;

        for (let i = 0; i < 20; i++){
            arrHidrata[i] = parseFloat((Math.random() * (maxPercent - minPercent) + minPercent).toFixed(2));
            sum += arrHidrata[i];
        }
        
        promedio = sum / 20;

        if(promedio < maxPercentage){
            n = true;
        }
    }

    return arrHidrata;
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

function arrPesoInicial(average){
    let max = average + 0.950;
    let min = average - 0.950;
    let pesoInicial = [];

    for(let i = 0; i < 25; i++){
        pesoInicial[i] = parseFloat((Math.random() * (max - min) + min).toFixed(3));
    }

    return pesoInicial;
}

function arrDiferencia(one, two){
    let arr = []; 
    for (let i = 0; i < two.length; i++){
        arr[i] = (one[i] * two[i]) / 100;
    }
    return arr;
}    

function arrPesoFinal(one, two){
    let arr = [];

    for(let x = 0; x < two.length; x++){
        arr[x] = one[x] + two[x];
    }

    return arr;
}

let $generatorReg = document.querySelector('#show-table');

$generatorReg.addEventListener('click', function(){

    let chickenWeightAverage = parseFloat(document.querySelector('#average-chicken-weight').value);
    let customWaterMax = parseFloat(document.querySelector('input[name="custom"]').value);

    /*----Text max absorption and check if it need to use one of the predefined ones or a custom one.---*/
    let waterMaxForm = parseFloat(document.querySelector('input[name="water-max"]:checked').value) === 100 ?
         customWaterMax : parseFloat(document.querySelector('input[name="water-max"]:checked').value);


    HideForm();
    createTable();
    time();
    date();

    let arrRegSeals = arrPrecintos();
    let arrRegPesoInicial = arrPesoInicial(chickenWeightAverage);
    let arrRegAbsorption = arrHidratacion(waterMaxForm);
    console.log(arrRegAbsorption);
    let arrRegDiferencia = arrDiferencia(arrRegPesoInicial, arrRegAbsorption);
    let arrRegPesoFinal = arrPesoFinal(arrRegPesoInicial, arrRegDiferencia);
    let sumPromedio = 0;
    let regPromedio = document.querySelector('.pro-result');
    
    for(let x = 0; x < 25; x++){
        let tdPolloNumber = document.querySelector(`td[data-axis = "0:${x}"]`);
        let tdRegPrecintos = document.querySelector(`td[data-axis = "1:${x}"]`);
        let tdRegPesoInicial = document.querySelector(`td[data-axis = "2:${x}"]`);

        

        tdPolloNumber.textContent = (x + 1).toLocaleString();
        tdRegPrecintos.textContent = arrRegSeals[x].toFixed().toLocaleString();
        tdRegPesoInicial.textContent = arrRegPesoInicial[x].toFixed(3).toLocaleString();

        
    }
    
    for(let x = 0; x < 20; x++){
        let tdRegHidratacion = document.querySelector(`td[data-axis = "5:${x}"]`);
        let tdRegDiferencia = document.querySelector(`td[data-axis = "4:${x}"]`);
        let tdRegPesoFinal = document.querySelector(`td[data-axis = "3:${x}"]`);

        tdRegHidratacion.textContent = arrRegAbsorption[x].toFixed(2).toLocaleString();
        tdRegDiferencia.textContent = arrRegDiferencia[x].toFixed(3).toLocaleString();
        tdRegPesoFinal.textContent = arrRegPesoFinal[x].toFixed(3).toLocaleString();
        sumPromedio+=arrRegAbsorption[x];
        
    }

    regPromedio.textContent = `${(sumPromedio/20).toFixed(2)} %`;

    /*--- Random seal lost -----*/
    let checkBox = document.getElementById('seal-lost').checked;
    let arrExtraSeal = [21, 22, 23, 24, 25];
    let numberLostSeal = parseFloat((Math.random() * (3 - 0) + 0).toFixed());
    let sealLost = 0;

    let sealRegReplace = function(arrReplace, seal){

        let lostSeal = [];
        let sealReplace = [];
    
        if(arrReplace != seal){
            for (let k = 0; k <= 5; k++){
                lostSeal[k] = document.querySelector(`td[data-axis = "${k}:${arrReplace - 1}"]`);
                sealReplace[k] = document.querySelector(`td[data-axis = "${k}:${[seal - 1]}"]`);
            }
    
            for (let k = 1; k <=5; k++){
                sealReplace[k].textContent = lostSeal[k].textContent;
            }
    
            lostSeal[1].textContent = arrRegSeals[seal - 1];
            lostSeal[2].textContent = arrRegPesoInicial[seal - 1];
    
            for (let k = 3; k <=5; k++){
                lostSeal[k].textContent = "----";
            }
    
        }else{
            return false;
        }
    }

    if(checkBox == true){
        function testProNumb(){
            sealLost = parseFloat((Math.random() * (20 - 1) + 1).toFixed());
            if(!arrExtraSeal.includes(sealLost)){
                return sealLost;
            } else{
                return testProNumb();
            }
        }

        for(numberLostSeal; numberLostSeal >= 0; numberLostSeal--){
            arrExtraSeal[numberLostSeal] = testProNumb();
        }

        arrExtraSeal.sort(function(a,b){
            return a - b;
        });

        sealRegReplace(arrExtraSeal[0], 21);
        sealRegReplace(arrExtraSeal[1], 22);
        sealRegReplace(arrExtraSeal[2], 23);
        sealRegReplace(arrExtraSeal[3], 24);
        sealRegReplace(arrExtraSeal[4], 25);

    }/*--- Random seal lost -----*/
    
    let textareaReg = document.querySelector('#medidasCorrectivas');
    let textareaForm = document.querySelector('#observacionForm').value;

    textareaReg.textContent = `Observaciones: ${textareaForm}`;

}); 

