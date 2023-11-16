let adatok =[];
function Elore(){
    let be = document.getElementById('adatok').value;
    adatok.unshift(be);
    document.getElementById('hely').innerHTML = "elore";
    document.getElementById('db').innerHTML = ""
    Ki();
}
function Hatra(){
    let be = document.getElementById('adatok').value;
    adatok.push(be);
    Ki();
}
function Ki(){
    let kimenet = document.getElementById('ki');
    kimenet.innerHTML = "";
    for (let index = 0; index < adatok.length; index++){
        kimenet.innerHTML += `<div class='col-3'> <div class='card'> <div class='card-body'> <h3>${adatok[index]}</h3> </div></div></div>`
    }
}