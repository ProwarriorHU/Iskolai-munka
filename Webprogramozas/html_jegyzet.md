# HTML 
Beviteli mezők 

Az űrlapelem: 

<form name=”x”> 

<input type=”text” name=”y”> 

</form> 

    Az érték lekérdezése: document.x.y.value (a beírt szöveg) 

Checkbox beviteli mező 

    <input type=”checkbox”> 0, 1 vagy több lehetőség kiválasztása 

<form name=”vehicles”> 

<input type=”checkbox” name=”vehicle1” value=”Bike”> I have a 		bike <br> 

<input type=”checkbox” name=”vehicle2” value=”Car”> I have a 	car <br> 

</form> 

    Az érték lekérdezése: document.vehicles.vehicle1.checked (TRUE vagy FALSE értéke lehet) 

Password beviteli mező 

    <input type=”password”> 

<form> 

<input type=”text” name=”username”><br> 

User password:<br> 

<input type=”password” name=”password”><br> 

</form> 

 

Number beviteli mező 

    <input type=”number”> 

Dátum beviteli mező 

    <input type=”date”> dátum bevitelére alkalmas, naptárból kiválasztjuk a megfelelő dátumot 

Fieldset 

    Összetartozó űrlapelemek csoportosítása 

Select elem - legördülő lista 

    Az értékek lekérdezése: 

    Document.cars.brands.selectedIndex - megadja a kiválasztott elem sorszámát a listáról 

    Document.cars.brands.options[3].text - megadja a lista 3. eleméhez írt szöveget (a <> és </option> közötti részt) 

    Document.cars.brands.options[3].value - megadja a lista 3- eleméhez tartozó értéket 

<form name=”cars”> 

<select name=”brands”> 

<option value=”volvo”>Volvo</option> 

<option value=”saab”>Saab</option> 

<option value=”fiat”>Fiat</option> 

<option value=”audi”>Audi</option> 

</select> 

</form> 

Szövegdoboz beviteli mező - textarea 

    Többsoros beviteli mező 

<textarea name=”message” rows=”10” cols=”30”> 

The cat was playing in the garden. 

</textarea> 

<br> 

<input type=”submit”> 

## HTML Canvas 

    A canvas egy HTML element. 

    Különböző alakzatokat és képeket tudunk kirajzolni vele - Canvas API 

    A bodyban van, szokás ID-t adni neki 

    A canvast tetszőlegesen lehet stílusozni 

A Canvas alapjai 

    A létrehozott canvasra csask Javascript-tl lehet rajzolni 

    Első lépés: a canvas elérése 

let canvas = document.getElementById(“canvasElement”) 

let canvas = document.querySelector(“canvas”) 

let canvas = document.getElementsByClassName(“canvasClass”) 

    Második lépés: a context létrehozása 

let ecset = canvas.getContext(‘2d’) 

    A context-el tudunk majd rajzolni, ez lényegében egy ecset (a ‘2d’ helyett lehet még haszálni ‘webgl’-t is) 

    Harmadik lépés: szélesség, magasság 

canvas.width = innerWidth; 

canvas.width = innerHeight; 

    Téglalap rajzolása: 

ecset.rect( 

x = 400	,							//x koordináta 

y = 200	,							//y koordináta 

w = 400,							//szélesség 

h = 200							//magasság 

 	) 

 

ecset.fill() 

    Nagyon fontos! Kirajzolás előtt - ctx.beginPath() 

    Rajzolás típusok: 

Ecset.fill()							//Kitölti 

Ecset.stroke()						//Csak körvonalat rajzol 

    A vonal hosszúsága megszabható: 

ecset.lineWidth = 1 

ecset.stroke() 

    A rajzolás színe cserélhető: 

ecset.strokeStyle = “green” 

VAGY 

ecset.fillStyle = “red” 

    Kör rajzolása 

ecset.beginPath() 

ecset.arc( 

x = 400, 

y = 230, 

radius = 150, 

startAngle = 0,			//ha =0, a jobb szélén kezdődik a rajzolás 

endAngle = Math.PI*2,		//a rajzolás vége (hány fokot rajzoljon be) 

counterclockwise = false					//nem kötelező 

) 

ecset.fillStyle = “green” 

ecset.fill() 

    Vonalak rajzolása 

ecset.moveTo( 

x  = 100, 

y = 100 

) 

ecset.lineTo( 

x = Canvas.width - 100, 

y = canvas.height - 100 

) 

    Vonal végének lekerekítése: 

ecset.lineCap = “round” 

    Utolsó pont összekötése a kezdőponttal: 

ecset.closePath() 

    Szöveg rajzolása 

ecset.font = “80px sans-serif" 

ecset.fillText( 

text = “Helló világ”, 

x = 200, 

y = 150 

) 

    Körvonalas szöveg: 

ecset.strokeText( 

Text = “Helló világ”, 

x = 200, 

y = 150 

) 

    Képek rajzolása 

const img = new Image() 

img src = “kutya.png” 

img.onload = function(){ 

ecset.drawImage( 

image = img, 

x = 50, 

y = 30, 

width = 1000, 

height = 400 

) 

} 

    Rajzok törlése 

ecset.beginPath() 

ecset.fillStyle = “red” 

ecset.rect(100, 100, 200, 300) 

ecset.fill() 

 

ecset.clearRect(150, 150, 150, 70) 

    Animáció rajzolása 