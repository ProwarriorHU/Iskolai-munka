function fetchData(){
    const admin = new Array("duffka erik","duffka@blathy.bp.sulinet.hu.info.onmicrosoft.com","iptelefon");
    const user = [];
    user[0] = document.register.user.value;
    user[1] = document.register.email.value;
    user[2] = document.register.pass.value;
    let passconfirm = document.register.passconfirm.value;
    let checkbox = document.register.check.checked;

    if (checkbox == false){
        alert("Fogadd el az ÁSZF-et");
        return;
    }
    else if (passconfirm != user[2]){
        alert("A jelszó nem egyezik a megerősítéssel");
        return;
    }
    else if (user[0] == admin[0], user[1] == admin[1], user[2] == admin[2]){
        alert("szuper titkos húsvéti tojás, duffka mód aktiválva")
        return;
    }
}