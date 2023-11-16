//Változók
let a,b,c;
a = 5;
b = 3.14;
c = a + b;
console.log(c);
let szoveg = "alma";
let szoveg2 = "körte";
let szoveg3 = szoveg + szoveg2;
console.log(szoveg3);
//Ez egy konstans
//const PI = 3.1415;
//PI = 3.14;
//console.log(PI);
//Ez errort ad vissza, mert a konstans nem változik

function osszead(){
    szam1 = parseInt(document.getElementById("szam1").value);
    szam2 = parseInt(document.getElementById("szam2").value);
    document.getElementById("eredmeny").innerHTML = szam1 + szam2
    }

function kivon(){
    szam1 = parseInt(document.getElementById("szam1").value);
    szam2 = parseInt(document.getElementById("szam2").value);
    document.getElementById("eredmeny").innerHTML = szam1 - szam2
    }

function oszt(){
    szam1 = parseInt(document.getElementById("szam1").value);
    szam2 = parseInt(document.getElementById("szam2").value);
    document.getElementById("eredmeny").innerHTML = szam1 / szam2
    }

function szoroz(){
    szam1 = parseInt(document.getElementById("szam1").value);
    szam2 = parseInt(document.getElementById("szam2").value);
    document.getElementById("eredmeny").innerHTML = szam1 * szam2
    }

//Tömb
const gyumolcsok = ["alma","körte","banán","kiwi"];
const autok = new Array("Volvo","BMW","Kia");
console.log(gyumolcsok[2]);

function kikeres(){
    videojatek = ["CSGO","League of Legends","Apex Legends","Genshin Impact","Unturned","The Witcher"];
    listnum = parseInt(document.getElementById("listnum").value);
    document.getElementById("jatek").innerHTML = videojatek[listnum-1]
}