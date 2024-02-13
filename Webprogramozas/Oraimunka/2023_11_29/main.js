class Game{
    constructor(name, price, studio, online){
        this.name = name;
        this.price = price;
        this.studio = studio;
        this.online = online;
    }
}

function Atvalt(euro){
    const exchangeRate = 378.28;
    return Math.round(euro * exchangeRate);
}

let games = [];
function JatekFelvetel(){
    let name = document.getElementById("name").value
    let price = Atvalt(document.getElementById("price").value)
    let studio = document.getElementById("studio").value
    let online = if (document.getElementById("online").checked == 1){"Igen"} else{"Nem"}
    if (document.getElementById("online").checked == 1){
        let online = "Igen";
    }
    else{
        let online = "Nem";
    }
    games.push(new Game(name, price, studio, online));
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("studio").value = "";
    document.getElementById("online").value = "";
} 
document.getElementById('save').addEventListener('click', JatekFelvetel);

function Listazas(){
    let tbody = document.getElementById('gameTable');
    games.forEach(element=>{
        //Sorozás
        let trow = document.createElement('tr');
        tbody.appendChild(trow);
        //Egyesével adatok: Cím,
        let tname = document.createElement('td');
        tname.innerHTML = `${element.name}`;
        trow.appendChild(tname);
        //Ár,
        let tprice = document.createElement('td');
        tprice.innerHTML = `${element.price}Ft`;
        trow.appendChild(tprice);
        //Studió,
        let tstudio = document.createElement('td');
        tstudio.innerHTML = `${element.studio}`;
        trow.appendChild(tstudio);
        //Online.
        let tonline = document.createElement('td');
        tonline.innerHTML = `${element.online}`;
        trow.appendChild(tonline);
    })
}

/*function Listazas(){
    let ul = document.getElementById('gameList');
    games.forEach(element=>{
        let listItem = document.createElement('li');
        listItem.innerHTML = `Cím: <strong>${element.name}</strong> 
        Ár: <strong>${element.price} Ft</strong> 
        Studió: <strong>${element.studio}</strong> 
        Online: <strong>${element.online}</strong>`;
        ul.appendChild(listItem);
    })
}*/
document.getElementById('list').addEventListener('click', Listazas);