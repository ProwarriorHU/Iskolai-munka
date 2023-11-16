function szamol(){
    var container = document.getElementById("content");
    let szulido = new Date(document.getElementById("bday").value);
    let dif = Date.now()-szulido.getTime();
    let difYear = new Date(dif);
    let calc = Math.abs(difYear.getUTCFullYear()-1970);
    const interval = setInterval(function(){
        let myBirthday, today, bday, diff, days;
        myBirthday = [szulido.getDate(),szulido.getMonth()+1];
        today = new Date();
        bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
        if (today.getTime() > bday.getTime()){
            bday.setFullYear(bday.getFullYear + 1)
        }
        diff = bday.getTime()-today.getTime();
        days = Math.floor(diff/(1000*60*60));
        let h = math.floor(diff/(1000*60*60));
        let m = math.floor(diff/(1000*60));
        let s = math.floor(diff/1000);

        container.innerHTML = "";
        container.innerHTML += "<div class='row'>";
        container.innerHTML += "<h1>"+calc+" Éves vagy!</h1></div>"
        container.innerHTML += "<div class='row'>"
        container.innerHTML += `<p>${days} nap ${(h-days*24)} óra ${m} perc ${s} másodperc a szülinapodig!</p>`
    },1000)
}