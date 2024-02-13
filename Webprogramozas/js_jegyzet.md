# Javascript
A javascript egy C-n alapuló nyelv. Gyengén típusos, azaz a változók típusát nem muszáj definiálni 

### Változók
- Undefined – nem definiált változó 
- Boolean – igen/nem értéket tároló változó 
- String - szöveget tárol 
- BigInt – 15 számjegynél nagyobb számoknak 
- Null - változó hiányát jelenti 
- Number -  Szám változó, ami egyaránt tartalmazhat egész vagy valós számokat is.  
- Symbol - speciális változó, kulcsként használjuk mert minden eleme egyedi 

### Elágazások
- `If (feltétel) {}` - egyirányú elágazás 
- `If (feltétel) {} else {}` - kétirányú elágazás 
- `If (feltétel) {} else if (feltétel) {}` - többirányú elágazás 

### Ciklusok
- `While (feltétel) {}` - elöltesztelő ciklus 
- `For (lépésszám) {}` - számláló ciklus 
- `For (let elem in tömb) {}` - for in ciklus, végig jár egy tömböt 
- `Do {} (feltétel)` - hátultesztelő ciklus, egyszer mindenképp lefut mert végén értékeli ki a feltételt 

### Tömbök
- Létrehozása:
    const tomb = []; 
    const tomb1 = [“auto”, 1, ”cica”, 2]; 
    const tomb2 = [[1, 2], 3, [2, 3]]; 
    const tomb3 = new Array(); 
    const tomb4 = new Array(3); 
    const tomb5 = new Array(1, 2, 3); 
    const tomb6 = new Array(“3”); 
    const tomb7 = new Array.of(3); 
    array10 = [1, {nev: “Erik”}, [1, “kettő”]] 
    array10[1].nev

- `typeof <érték>` - Típus lekérése
- Tömb hosszának lekérése:
    let L = array10.length;
    array10.tostring();

- Elválasztó elemet megváltoztatása:
    let gy = [‘alma’, ‘banán’, ‘körte’];
    gy.join(‘%’);
    //alma%banán%körte

- Poppolt változó lementése:
    gy.pop();
    let L = gy.pop();
- `gy.shift();` - A tömb elejéről kivesz egy elemet és minden indexet 1-gyel csökkent
- `gy.unshift(“citrom”);` - Betesz egy elemet a tömb elejére és minden indexet 1-gyel eltol
- `gy[gy.length] = “kiwi”;` - Új elem a végére
- `Delete gy[0];` - 0-dik elem undefined
- Tömbök összefűzése:
    let L = [“Erika, “Dora”];
    let F = [“Emil”, “Tamás”, “Kristóf”];
    let gyerekek = L.concat(F);
- Tömb egyszerűsített kiírása:
    array10 = [[1, 2], [3, 4], [5, 6]];
    array10.flat(); 
    //1, 2, 3, 4, 5, 6 
- `gy.splice(1, 0, “citrom”, “kiwi”);` - Megadott helyről, megadott mennyiségű elemet törölni, és elemeket hozzáadni. Paraméterei: honnantól, mennyit törölni, mit hozzáadni.
//[“alma”, “citrom”, “kiwi”, “banán”, “körte”] 
- `gy.splice(0,1);` - Elem törlése splice-al

### Set, Map
- `let set = new Set();` - set létrehozása
- `set.add(<érték>);` - érték hozzáadása
- `set.delete(<érték>);` - kijelölt érték törlése
- `set.clear();` - teljes set törlése
- `set instanceof set` - az elöl megadott set típusát összehasonlítja a hátul lévővel és true-t - returnöl ha egyeznek

- Map deklarálása
`let szotar = new Map();`
`szotar.set(<kulcs>, <érték>);`

- `szotar.size` - elemek számának lekérése 
- `szotar.delete(<kulcs>)` - bizonyos kulcs-ú elemet töröl 
- `szotar.clear();` - teljes map törlése 
- `szotar.foreach((value, key) => {clg(‘${key}-${value}’);}`
//csak foreach-el bejárható, clg console.log-t jelenti
- `for (let k of szotar.entries())` - visszaadja a kulcs-érték párokat
- `.keys()` - csak a kulcsokat adja vissza
- `.values()` - csak az értékeket adja vissza

### Regex 

. - bármilyen karakter 

[éa] - legyen itt é vagy a 

[0-9] - legyen itt szám 

[a-z] - legyen itt kisbetű 

[A-Z] - legyen itt nagybetű 

[a-zA-Z] - nagy vagy kicsi 

[0-9a-zA-Z] - szám vagy nagy vagy kicsi 

[^a-z] - ezeket a karaktereket nem akarjuk 

[^0-9] - nincsenek számok 

.??? - az előtte lévő értéket 0 vagy 1 keresi 

.+ - az előtte lévő értéket 1 vagy többször keresi 

.* - az előtte lévő értéket 0 vagy többször keresi 

{m,n} - megadható az előtte lévő adat legalább hányszor { 3, }, pontosan hányszor { 3 }, legfeljebb hányszor { ,3 }, vagy 2 érték között hányszor { 3, 6 } szerepeljen 

^ - ha a kifejezés elején van, csakis a szó elején kereshet 

$ - csak a szó vége lehet 

( ) - csoportosítás 

| (alt+W) - vagy 

## Event listener

- `.addEventListener('érzékelt esemény', kívánt tevékenység)`