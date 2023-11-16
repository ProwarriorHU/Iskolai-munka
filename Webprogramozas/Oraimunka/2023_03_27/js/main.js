/*let gyarto = [];
let modell = [];
let szin = [];

function kuldes(){
    gyarto.push(document.getElementById('gyarto').value);
    modell.push(document.getElementById('modell').value);
    szin.push(document.getElementById('szin').value);
    Ki();
}

function listazas(){
    let kimenet = document.getElementById('ki');
    kimenet.innerHTML = "";
    for (let index = 0; index < gyarto.length; index++){
        kimenet.innerHTML += `<thead> <tr> <th>Gyártó</th> <th>Modell</th> <th>Szín</th </tr> </thead>${gyarto[index]} `
    }
}*/

class car{
    gyarto=""; modell="";szin="";
    constructor(gyarto, modell, szin){
        this.gyarto = gyarto;
        this.modell = modell;
        this.szin = szin;
    }
}
let list = [];
function kuldes(){
    let gyarto = document.getElementById('gyarto').value;
    let modell = document.getElementById('modell').value;
    let szin = document.getElementById('szin').value;
    let auto = new car(gyarto,modell,szin);
    list.push(auto)
}

function listazas(){
    let target = document.getElementById('target');
    target.innerHTML = "";
    for (let i = 0; i < list.length; i++){
        target.innerHTML += `<tr><td>${list[i].gyarto}</td><td>${list[i].modell}</td><td>${list[i].szin}</td></tr>`
    }
}
