 C# 
- A .NET keretrendszer fő nyelve 
- Objektumorientált 
- Erősen típusos 

Szintaktika 
- Az utasításokat pontos vesszővel kell le zárni: ; 
- Case-sensitive 
- A programegységeket blokkokba zárjuk, kapcsos zárójelek közé tesszük: {} 
- Megjegyzések: // (egysoros) vagy /*…..*/ (többsoros) 

Névterek 
- A névtér olyan mint egy virtuális doboz amelyben logikailag összetartozó osztályok, metódusok, stb vannak
- A system névtér tartalmazza  

Változók 
- A program futása közben adatainkat ideiglenesen eltároljuk, ezek a tárolók a változók 
- Deklaráció (változó létrehozása): típus változónév 
- Változónév - egyedi a programon belül, betűvel, vagy alulvonással kezdődhet későbbiekben szám is lehet benne. Kisbetűvel kezdjük ha több szóból áll szóhatárnál nagybetűvel “választjuk el” 
- Definíció (kezdőértékadás): x=10 
- Deklaráció és definíció is történhet egyben: int y=5 
- Konstans: a const típusmódosító használatával az értéket megváltozhatatlanná tesszük. Egyszer kap értéket az elején amikor deklaráljuk, minden későbbi értékadás hibát eredményez 

Műveletek 
- Egész típussal: + - * / (egész osztás) % (maradékképzés) 
- Valós típussal: + - * / (valós osztás) 
- Karakter típussal: + (összefűzés) 
- Szöveg (string) típussal: + (összefűzés) 
- Logikai típussal: && (és) || (vagy) ! (nem) 

Prefix és Postfix 
- Sokszor kell egy változó értékét 1-gyel növelni (a=a+1), ennek egyszerűbb írásmódja a ++a (prefix) vagy az a++ (postfix) 
- Prefix esetében a változó az operátorral változtatott értéket adja egy kifejezés kiértékelésekor, míg a postfix esetében az eredetit 
- Például: 
  a=++b //hatása: b=b+1; a=b; 
  a=b++ //hatása: a=b; b=b+1; 

Végrehajtási sorrend 
- Elsődleges: zárójelek 
- Egyoperandusú: +, -, ! 
- Multiplikatív: *, /, % 
- Additív: +, - 
- Relációs: <, >, <=, >= 
- Egyenlőségi: ==, != 
- Logikai ÉS: && 
- Logikai VAGY: ||
- Feltételes művelet
- Értékadás: = 

Feltételes operátor 
- Három operandussal rendelkezik 
- Valójában egy logikai elágazás utasítás, a tömörebb írásmód kíváló eszköze 
- Szintaktikája: feltétel ? Igaz esetben lefutó utasítás : hamis esetben lefutó utasítás 

Adatok beolvasása 
- Egy sor beolvasása billentyűzetről: string s= Console.ReadLine(); 
- A beolvasás mindig string típusú változóba történik, tehát általában konvertálni kell. 
  Pl: int x = int.Parse(Console.ReadLine()); 

Adatok kiírása 
- Kiírás a konzolra: Console.Write(kifejezés); 
- Kiírás a konzolra soremeléssel: Console.WriteLine(kifejezés); 
- A kifejezés lehet karaktersorozat (“” között), vagy változónév 

Formázott kiíratás 
- String.Format(“{index[,alignment][:formatString]}”, object); 
- Index - helyőrző sorszáma 
- Alignment – ennyi karakteren jeleníti meg (egymás alá igazítás) (+/- jobbra/balra) 
- FormatString - formátumot adja meg: 
- C,c – currency 
- N,n – number 
- D,d – decimal 
- P,p – percent 
- X,x – hexadecimal 
- A betűjel utáni szám a tizedes jegyek számát adja meg 

Túlcsordulás 
- Akkor beszélünk túlcsordulásról. Ha az adott érték mér nem fér el a változónak fenntartott tárterületen 
- Például byte (0-255; 8bit) típusnál még a 255 belefér a tárterületbe. De ha eggyel (vagy többel) növeljük, akkor túlcsordulás következik be 
- C#-ban az adattípus.MaxValue/MinValue -val megtudhatjuk az adott típus legnagyobb/legkisebb MÉG eltárolható értékét 

Math osztály 
- A System névtér Math osztálya a következő 
- Math.Sqrt(x) - x négyzetgyöke 
- Math.Abs(x) - x abszolútértéke 
- Math.Round(x [,y]) - kerekítés a matematikai szabályok szerint 
- Math.Ceiling(x) - felfelé kerekítés  
- Math.Floor(x) - lefele kerekítés 
- Math.Pow(x,y) - hatványozás, x-alap, y-kitevő 
- Math.PI - Pi konstans 

Random osztály 
- Random r=new Random(); 
  //r véletlenszám objektum rendszeridő alapú létrehozása 
- Int v= r.Next(); 
  //véletlen egész szám 0 és Maxint (legnagyobb égesz) között, 0<=v<Maxint 
- Int v1=r.Next(10); 
  //véletlen egész szám 0 és 10 közöt,0<=v1<10 
- Int v2=r.Next(10,100); 
  // véletlen egész szám 10 és 100 között, 10<=v2<100 
- Double d=r.NextDouble(); 
  //véletlen valós szám 0 és 1 között, 0<=d<1 

Ciklusok 
- Ciklusokat akkor használunk amikor egy adott tevékenységet (ciklusmag) többször végre kell hajtanunk 
- Azokat a változókat, amelyektől a ciklus futása függ, ciklusváltozónak hívjuk 
- Fajtái: 
  - Számláló ciklus: előre megadott számú alkalommal fut le a ciklusmag 
    for (kezdőérték-adás; feltétel; ciklusváltozó növelése)
    {
      utasítások;
    }
  - Előltesztelő ciklus: egy feltétel teljesülésétől függően hajtja végre a ciklusmagot. Előfordulhat, hogy egyszer sem, ha a feltétel már kezdetben sem teljesül 
    while(feltétel) 
    { 
      utasítások; 
    } 
  - Hátultesztelő ciklus: egyszer mindenképpen végrehajtja a ciklusmagot, majd addig ezt ismétli, amíg a feltétel teljesül 
    do 
    { 
      utasítások; 
    } while (feltétel); 

String típus 

    Karakterek sorozata, ezek unicode kódja tárolódik 

    Hossza maximum 232 karakter hosszú 

    A karaktereket akár egyenként is le tudjuk kérdezni, de közvetlenül nem tudjuk módosítani 

    A karakterek sorszámozása 0-tól indul 

Műveletek stringekkel 

    Összefűzés: +  

string a = ”alma”; 

string b = ”fa”; 

string c = a + b; 

    Réssztring képzése: Substring() Változónév.Substring(honnan,db) 

string s = ”mákostészta”; 

Console.Write(s.Substring(5,6)); //tészta 

Tulajdonságok, metódusok 

    Length – karakterek száma 

string s = “alma”; 

int hossz = s.Length; //4 

    Replace() - adott szövegrész cseréje egy másikra 

string s = “almafa”; 

string uj = s.Replace(“alma”, “körte”);  

    IndexOf() - réssztringet keres, ha megtalálta, annak kezdetét adja meg, ha nincs, akkor –1 

string s = “közeledik az érettségi.”; 

int holvan = s.IndexOf(“érettségi”); //13 

    2 paraméter esetén a szöveget a megadott pozíciótol keresi: 

int holvan = s.IndexOf(“érett”,15); //-1 

Console.WriteLine(s.LastIndexOf(‘é’)); //19 

    ToUpper() - adott szöveget nagybetűssé alakítja 

string s = “Alma”; 

string nagys = s.ToUpper(); //ALMA 

    ToLower() - adott szöveget kisbetűssé alakítja 

string s = “Alma”; 

string kiss = s.ToLower(); //alma 

    Trim() - felesleges szóközök eltávolítása az adott string elejéről és végéről 

string s = “   sok a szóköz   “; 

string ujs = s.Trim(); 

    Remove() - adott karaktertől megadott darabszámú karaktert kivág 

string s = “érettségi”; 

string uj = s.Remove(honnan, darab);  

    Contains – igaz értéket ad vissza, ha a paraméterként megadott karakter(sorozat) benne van a stringben 

string s = “verylonglongstring”; 

Console.WriteLine(s.Contains(“long”)); //true 

    TryParse – annak meghatározása hogy egy string numerikus értéket jelöl-e 

int i = 0; 

string s = “108”; 

bool result = int.TryParse(s, out i); //i = 108; result = true; 

    CompareTo() - két sztring összehasonlítása 

string a = “alma”; 

string b = “ablak”; 

int x = a.CompareTo(b); 

//x<0, ha a<b 

//x>0, ha a>b 

//x=0, ha a=b 

Összetett típusok 

    Egy változóban több értéket tárolunk 

    Tömb (vektor): egydimenziós, kétdimenziós (mátrix) 

    Lista  

Tömb adattípus 

    Több azonos típusú adatot tárol 

    Egy MAX számú elemet tartalmazó tömb: 

0. elem (7) -> 1. elem (33) -> 2. elem (24) -> MAX-1 elem (154) 

    Vektor típusú változó deklarációja: 

bázistipus[] változó_név; 

    Helyet is kell foglalnunk az elemek számára: 

változó_név = new bázistipus[MAX]; 

    Deklaráció és helyfoglalás egyben: 

const int MAX = 100; 

int[] v = new int[MAX]; 

    A tömb elemeinek elérése (indexelés): 

v[2] = 24; 

    Elemek bejárása for cikussal: 

for (int i = 0; i < MAX; i++) 

{ 

Console.WriteLine(v[i].ToString()) 

} 

    foreach ciklus is használható a bejárására 

int[] numbers = {4, 5, 6, 1, 2, 3 –2, -1}; 

foreach (int i in numbers) 

{ 

Console.Write($”{i} “); 

} 

Mátrixok 

    A két dimenziós tömböt mátrixnak hívjuk 

    Mátrix típusú változó deklarációja: 

bázistípus[,] változónév; 

    Egyetlen vesszőben tér el a vektortól 

    Helyfoglalásnál meg kell adni, hogy lefeljebb a hány sorból (MAXN), illetve hány oszlopból (MAXM) állhat a mátrix 

int[,] matr = new int [MAXN,MAXM]; 

    Hivatkozás a tömb egy elemére: matr[i,j] 

Ahol : 0<i<n és 0<j<m 

Mátrixok bejárása 

    2 for ciklussal: 

for (int i=0; i<n; i++) 

{ 

for (int j=0; j<m; j++) 

{ 

matr[i,j]=0; 

} 

} 

    Kezdőértékkel létrehozás: 

double[,] x={ {}, {}, {}, …} 

Listák 

Gyakorlatilag olyan, mint egy változó hosszúságú tömb. 

    Lista létrehozása: 

List<típus> név = new List<típus>(); 

Pl: List<int> lista = new List<int>(); 

    Elem hozzáadása: 

lista.Add(3); 

lista.Add(5); 

    Elemek száma: 

Int elemek_száma = lista.Count; 

    Lista bejárása: 

 		for(int i=0; i<lista.Count; i++){} 

vagy 

foreach (int elem in lista) 

Console.WriteLine(elem) 

    Lista kiüritése: 

lista.Clear(); 

    Elem sorszámának kiíratása: 

Int sorszám = lista.IndexOf(5); 

(-1 --- ha nincs a listában) 

    Elem törlése a listából: 

bool b = lista.Remove(3); 

(false --- ha nincs a listában); 

    Adott indexű elem törlése: 

lista.RemoveAt(0); 

    Egy tetszőleges, megfelelő típusú kollekció(tömbök(1dimenzió), halmazok, más listák...) összes tartalmát átmásoljuk az adott lista végére. 

lista.AddRange(kollekció) 

    Tartalmaz-e egy adott értéket a lista? 

lista.Contains(elem)			//true vagy false 

    Növekvő sorrendbe rendezi az elemeket: 

lista.Sort() 

Programozási tételek 

Egyszerű (elemi) programozási tételek 
	

Összetett programozási tételek 

Összegzés 
	

Másolás  

Megszámlálás  
	

Kiválogatás  

Szélsőérték kiválasztás 
	

Szétválogatás  

Lineáris keresés (eldöntés, kiválasztás) 
	

Metszetképzés  

 
	

Únióképzés  

 
	

Összefuttatás  

Másolás tétele 

    A bemenő sorozatot átmásoljuk úgy a kimenő sorozatba, hogy közben az elemeken esetleges átalakításokat végzünk 

    Az eredménysorozatnak (B) ugyanannyi eleme lesz, minta bemenőnek (A) 

Ciklus i = 1-től N-ig 

B[i]:=f(A[i]) 

Ciklus vége 

Kiválogatás tétele 

    Egy N elemű A sorozat összes T tulajdonsággal rendelkező elemé kell meghatározni. Gyűjtsük a kiválogatott elemeket (vagy sorszámaikat) a B vektorban. B vektort ugyanakkorára méretezzük, mint A-t 

j:= 0						//nem szabad elfelejteni 

Ciklus i:=1-től N-ig 

Ha A[i] T tulajdonságú akkor 

j:=j+1 

B[j]:=A[i]		//:=i, ha a sorszámot tároljuk 

Elágazás vége 

Ciklus vége 

Metszetképzés tétele 

    Rendelkezésünkre áll egy N és egy M elemű halmaz az A[] és B[] vektorokban 

    Készítsük el a két halmaz metszetét a C[] vektorba. (két halmaz metszetébe azok az elemek tartoznak, amelyek mindkettőben szerepelnek 

K:=0 

Ciklus i:=1-től N-ig					//vesszük A[] elemeit 

i:=i+1 

Ciklus amíg j<=M és A[i]<>B[j]	//amíg nincs az A[]-vel egyező, vagy van elég elem 

j:=j+1 

Ciklus vége 

Ha j<=M akkor					//ha volt egyező eleme 

K:=k+1; 

C[k]:=A[i]					//betesszük C[] vektorba 

Elágazás vége 

Ciklus vége 

Únióképzés tétele 

    Rendelkezésre áll egy N és egy M elemű halmaz, az A[1..N] és a B[1..M] vektorban ábrázolva. Készítsük el a két halmaz egyesítését a C vektorba 

    Két halmaz egyesítésében azok az elemek tartoznak, amelyek legalább az egyikben szerepelnek 

Ciklus i:=1-től N-ig 

C[i]:=A[i]			//először az A[] elemei átkerülnek a C-be 

Ciklus vége 

K:=N 

Ciklus j:=1-től M-ig 

i:=1 

Ciklus amíg i<=N és A[i]<>B[j]	//B-beli elemet keresünk A-ban 

i:=i+1 

Ciklus vége 

Ha i>N akkor//ha nincs közös elem 

k:=k+1 

C[k]:=B[j]			//akkor berakujk az elemet C-be 

Elágazás vége 

Ciklus vége 

Összefuttatás tétele 

I:=1 j:=1 k:=0 

Ciklus amíg i<N+1 és j<M+1 

K:=k+1 

 

 

ágazás 

A[i]<B[j] esetén C[k]:=A[i]	i:=i+1 

A[i]>B[j] esetén C[k]:=B[j]	i:=i+1 

A[i]=B[j] esetén C[k]:=A[i]	i:=i+1	j_=j+1 

Elágazás vége 

Ciklus vége 

Metódusok 

    Gyakran szükségünk van arra, hogy egy utasítássorozatot névvel ellátva külön egységbe szervezzünk, ezeket metódusoknak hívjuk 

    Metódusok fajtái: 

    Visszatérési értékkel rendelkező (ezt más nyelvekben függvénynek hívjuk) 

    Void visszatérési értékű, azaz visszatérési érték nélküli (ezt más nyelvekben eljárásnak hívjuk 

    Általános alak: 

Minősítők típus Név (formális paramérterek) 

{ 

Utasítások; 

Return visszatérési_érték; 

} 

    Megjegyzés: a return utasítás csak akkor kell, ha a visszatérési érték típusa nem void 

    Minősítők: 

    Privát (osztályon kívülről nem elérhető), vagy publikus (osztályon kívülről is elérhető: private vagy public kulcsszó 

    Statikus (az osztályhoz tartozik, és egy példányban jön létre): static kulcsszó 

    Típus: a visszatérési érték típusa (bármilyen típus használható) vagy void (típus nélküli) 

    Formális paraméterek: 

     megadják, hogy a metódus milyen típusú paraméterekkel rendelkezik, és azok milyen sorrendben követik egymást 

    Típus név alakúak, vesszővel elválasztva 

    Ammenyiben nincs formális paraméter, a () akkor is kell! 

    Aktuális paraméterek: metódus hívásakor a konkrét változók vagy kifejezések amelyeket átadunk a metódusnak 

    Metódus hívása: 

    Visszatérési érték nélküli metódus esetén: 

név (aktuális paraméterek); 

    Visszatérési értékkel rendelkező metódus esetén: 

változó = név (aktuális paraméterek); 

Paraméterátadási módok 

    Érték szerinti: 

    A paraméter értékét lemásolja, tehát az eredeti érték nem változik meg 

    Ez az alapértelmezett átadási mód 

    Cím szerinti: 

    A változó címét adja át, tehát minden módosítás megváltoztatja az eredeti értéket is 

    Két fajtája van: ref és out paraméterátadás 

    A paraméter típusa elé kell írni a megfelelő kulcsszót (a formális és aktuális paraméterlistában is!) 

    Ref (referencia szerinti paraméterátadás): akkor használjuk, ha az átadott változó már rendelkezik értékkel, és azt a metódus meg fogja változtatni 

    Out (kimenő paraméterátadás): akkor használjuk, ha az átadott változó még nem rendelkezik értékkel, és azt a metódustól fogja megkapni 

    Pl: 

void Csere(ref int x, ref int y) 

{ 

int s = x; 

x = y; 

y = s; 

} 

    Hívás: Csere(ref x, ref y); 

Fájlkezelés 

    C# esetén a fájlkezelést segítő osztályok, objektumok a System.IO névtérben találhatóak. A fájlkezelés alaposztálya a Stream, vagyis adatfolyam 

    Első lépés using lista bővítése: using System.IO; 

    Elérési utak kezelése: mivel a “\” karakter a C#-ban speciális szerepet játszik (escape karakter, pl ”Új sor\n”, “Helló, \”haver\”!”), ezért az elérési utakat így adjuk meg: 

String path=”C:\\Dokumentumok\\Sulis\\hazi.txt” 

String path2=@”C:\Dokumentumok\Sulis\hazi.txt” 

Beolvasás szöveges fájlból 

    A “using” lista kibővítése:  

using System.IO; 

    Fájl létezésének ellenőrzése:  

if (File.Exists(fájlnév)) {…} 

    Fájltípus deklarációja és a fájl megnyitása:  

StreamReader f = File.OpenText(fájlnév); 

    Olvasás, amíg nincs vége a fájlnak:  

while (!f.EndOfStream) {…} 

    Sorok beolvasása (a cikluson belül):  

string sor= f.ReadLine(); 

    Fájl bezárása:  

f.Close(); 

Kiírás szöveges fájlba 

Különbségek a beolvasáshoz képest: 

    Fájltípus deklarációja és a fájl megnyitása: 

StreamWriter f = File.CreateText(fájlnév); 

    Nem kell használni az f.EndOfStream tulajdonságot, mert íráskor nem a fájl végéig írunk, hanem addig, amíg el nem fogy a kiírandó adatmennyiség 

    Egy sor kiírása: 

f.WriteLine(sor); 

    A fájl bezárása kötelező! 

f.Close(); 

Hozzáfűzés meglévő fájlhoz 

Fájltípus deklarációja és fájl megadása: 

StreamWriter f = File.AppendText(fájlnév); 

Karakterkódolás: 

A kódolások fő jellemzője, hogy egy karaktert hány bájton tárolnak, hiszen ez szabja meg hány különféle betű és jel használható. A legelterjedtebb kódolások: 

    ASCII – American Standard Code for Information Interchange 

    1 bájt/karakter, 256 karakter 

    UTF – Unicode Transformation Format 

    1-4 bájt/karakter, 256^4 karakter 

    Első 128 jel kódolása megegyezik az ASCII-val, gyakori karakterekhez rövidebb kód 

Encoding.ASCII, Encoding.UTF8, Encoding.Default 

Pl: StreamReader f= new StreamReader(“C:\\proba.txt”,Encoding.Default) 

 

Dictionary 

    Olyan adatszerkezet, amely kulcs - érték párokat tartalmaz 

    Minden kulcsnak egyedinek kell lennie 

    A kulcs lehet szám típusú, vagy string 

    A pároknak nincs sorszámuk, nem index, hanem kulcs alapján kereshetünk 

    Használatához importálnunk kell a System.Collections.Generic névteret 

Dictionary létrehozása 

Dictionary<Tkey, TValue> név= new  Dictionary<Tkey, TValue>(); 

 

Pl.	Dictionary<string, string> fovarosok= 

new Dictionary<string,string>(){ 

{“Franciaország”, “Párizs”}, 

{“Olaszország”, “Róma”}, 

{“Ausztria”, “Bécs”}, 

{“Magyarország”, “Budapest”} 

}; 

Dictionary metódusok 

    Kulcs-érték hozzáadása: 

fovarosok.Add(“Németország”, “Berlin”); 

    Megadja hogy szerepel-e egy kulcs a szótárban: 

bool van=fovarosok.ContainsKey(“Ausztria”); 

    Megadja hogy szerepel-e egy érték a szótárban: 

bool van=fovarosok.ContainsValue(“Róma”); 

    Eltávolít egy elemet a szótárból, a visszatérési érték a művelet sikerességét jelzi: 

bool torles=fovarosok.Remove(“Görögország”); 

    Az elemek (kulcsok) száma: 

int szam=fovarosok.Count(); 

    Törli a teljes szótárat: 

fovarosok.Clear(); 

Dictionary bejárása 

    A szótárat foreach ciklussal lehet végig olvasni, amellyel a szótárból KeyValuePair<TKey, TValue> típusú elemeket kapunk. Ezek Key és Value mezői adják meg a megfelelő kulcs és érték párokat 

foreach (KeyValuePair<string, string> elem in fovarosok) 

{ 

Console.WriteLine(elem.Key+“: “+elem.Value); 

} 

Kiírás rendezése 

Érték szerint: 

foreach (KeyValuePair<int, int> elem in szamok.OrderBy(key=>key.Value) 

{ 

Console.WriteLine(elem.Key + “ : “ + elem.Value); 

} 

Kulcs szerint: 

foreach (KeyValuePair<int, int> elem in szamok.OrderBy(key=>key.Key) 

{ 

Console.WriteLine(elem.Key + “ : “ + elem.Value); 

} 

Csökkenő sorrendbe: 

foreach (KeyValuePair<int, int> elem in szamok.OrderByDescending(key=>key.Value)) 

{ 

Console.WriteLine(elem.Key + “ : “ + elem.Value); 

} 

OOP 

    Az objektum-orientált programozás - egy programozási módszertan, a valós világ modellezésén alapul 

    Az összetartozó adatokat és az azokkal műveleteket végző eljárásokat vagy függvényeket egy egységbe, másnéven osztályba szervezzük 

    Egy osztályt tekinthetünk egy mintának, tervrajznak is melyből példányokat tudunk létrehozni, ez lesz egy-egy objektum, amit az adott osztály alapján példányosítunk 

    Egy objektum változóit mezőnek, adattagnak vagy tulajdonságnak (attributum) hívjuk, az objektumhoz tartozó eljárásokat. Függvényeket pedig metódusnak 

    Egy osztályt (class) többször is felhasználhatunk 

OOP alapelvei 

    Egységbezárás (Encapsulation) 

Az objektumok egységbe zárják az őket jellemző adatokat és a 	rajtuk végezhető műveleteket és szabályozhatjuk, hogy az 		egységen kívülről hogyan férhetnek hozzájuk (adatelrejtés) 

    Öröklés (Inheritance) 

Egy meglévő osztályból származtathatunk új osztályt, mely 		örökli az ősosztály dolgait és ezek mellé még újakat is definiálhatunk, vagy a régieket módosíthatjuk 

    Többrétegűség (Polymorphism) 

A különböző, egymásból származó osztályok azonos			megnevezésű műveletei a konkrét objektumtól függően 		más-más konkrét megvalósítással rendelkezhetnek, egy adott	“üzenetre” másképp válaszolhatnak 

Új osztály létrehozása 

    Egy osztály felépítése: 

Class Név 

{ 

//konstruktor(ok) 

//metódus(ok) 

//adattag(ok) 

//tulajdonság(ok) 

} 

    Az osztály minden, előbb felsorolt összetevőjéhez hozzá kell rendelnünk egy hozzáférési szintet 

    Hozzáférési szintek: 

    Private: adott metódus vagy adattag csak és kizárólag az osztály valamelyik metódusából érhető el, az osztályból példányosított objektumból nem (ez az alapértelmezett, ha a kulcsszót elhagyjuk) 

    Public: az adott metódus kívülről, egy objektumból is szabadon meghívható, illetve az adott adattag kiolvasható és az értéke módosítható 

    Konstruktor 

    Speciális metódus, amelynek semmilyen visszatérési értéke nincsen (még void sem!) 

    A neve pontosan megegyezik az osztály nevével 

    Akkor fut le, amikor az osztályból objektumokat példányosítunk (például itt adhatunk kezdőértékeket az adattagoknak) 

    Két fajtája van: 

    Paraméter nélküli (default) konstruktor: az osztállyal együtt létrejön, de írhatunk újat 

    Paraméteres konstruktor: tetszőleges számút készíthetünk, de ezek paraméterlistájának eltérőnek kell lennie! 

- Példa:
class Proba (osztály)
{
  public Proba() {a = 0;} (default konstruktor)
  public Proba(int x) (paraméteres konstruktor)
  {
    a = x;
  }
  public string Kiir() (publikus metódus)
  {
    return a.ToString();
  }
  private int a; (privát adattag (mező))
}

Objektum létrehozása 
- Default konstruktorral:
  Proba p1 = new Proba();
- Paraméteres konstruktorral:
  Proba p2 = new Proba(100);
- Publikus metódus meghívása:
  Console.WriteLine(p2.Kiir()); 
- A privát adattagot nem érhetjük el kívülről:
  Pl. A =/= 10; 

Tulajdonságok használata 
- A privát adattagokat kívülről tehát nem tudjuk kiolvasni és módosítani
- Ez az objektumorientáltság egyik alapelv: a megvalósítást elrejtjük a felhasználó elől
- Valahogyan azonban szeretnénk a mezőket használni
- Az adattagok módosítását ellenőrzötten szeretnénk megoldani (például csak bizonyos értékazárok közötti értéket engedünk meg)
- A megoldás: tulajdonságok használata 
- Tulajdonságok deklarációja:
  minősítő típus tulajdonságnév {get {//kiolvasáskor lefutó kód} set {//értékadáskor lefutó kód}}

- Példa: 
public int A (tulajdonság) 
{
  get
  {
    return a; (érték kiolvasásakor lefutó kód)
  }
  set
  {		
    v (értékadáskor megadott új érték)
    if (value <= 100) { a = value; } (ellenőrzött értékadás)
  }
}

- A tulajdonság típusa általában megegyezik az adattag típusával (nem kötelező) 
- Tulajdonság használata:
  p1.A = 10;
  Console.WriteLine(p1.A); 
- Csak olvasható tulajdonság: nincsen set rész
- Csak írható tulajdonság: nincsen get rész  

Absztrakt osztály
- Tipikusan az öröklési lánc őse 
- Közvetlenül nem példányosítható
- Rendelkezhetnek absztrakt metódusokkal (csak a paraméter listáját adjuk meg, a megvalósítását nem) 
abstract class pelda
{
  public abstract void valami();
}

- Az absztrakt metódusok megvalósítása override kulcsszóval történik a leszármazott osztályban
class orokolt: pelda
{
  public override void valami()
  {
    //a valami függvény implementációja 
  } 
} 

Interfészek 
- Felület 
- Egy osztálynak csak egy közvetlen őse lehet, viszont az osztály korlátlan számú interfészt megvalósíthat 
- Felfogható egy viselkedés sablonként, hasonló az absztrakt osztályokhoz, de vannak apró különbségek 
- Hasonlóság: nem lehet ezt sem példányosítani, csak az őt megvalósító 
- Csak absztrakt definíciókat tartalmaznak: metódusokat, tulajdonságokat, de adattagokat nem 
- Itt megvalósításról beszélünk, nem öröklésről, itt nem kell öröklési láncon belül maradni, ugyanazt az interfészt simán megvalósíthatja két, egymástól teljesen független osztály 
- A felületben metódusok és tulajdonságok neve előtt módosító nem szerepelhet, az összes elem publikus kell legyen 

Példa 1 

interface IPeldaFelulet
{
  void PeldaFuggveny();
}
class FeluletMegvalositas : IPeldaFelulet	
{
  public void PeldaFuggveny()
  {
    Console.WriteLine(“Példa függvény lefut”); 
  }
} 

Példa 2 

class Személy {...} 
interface IÜzenetFogadó 
{ 
  bool Elérhető { get; set; } 
  void Üzenetküldés(string üzenet); 
} 
class ChatPartner : Személy, IÜzenetFogadó 
{ 
  public bool Elérhető { get {...} set {...} } 
  public void ÜzenetKüldés(string üzenet) {...}
} 

Interfészek kiterjesztése 

interface IEladható 
{ 
  bool Ár { get; set; } 
  void Elad(); 
} 

interface IAkciózható : Eladható 
{ 
  void Akció(double kedvezmény); 
} 

public class Termék : Akciózható 
{ 
  public bool Ár {get; set;} 
  public void Elad() {...}
  public void Akció(double kedvezmény) {...} 
} 

Generikus Osztályok
- Típussal paraméterezhető 
- Az osztály definiálásakor megadunk egy T típust, amely helyére különböző létező típusokat helyettesítünk 
- Lehet egy osztálynak több típusparamétere és 
- Adattárolási szerkezeteknél nagyon hasznos, mikor a tárolási-, és adatkezelő mechanizmusok nem függenek az adatok típusától, így ezeket általánosítani tudjuk bármilyen típusra 
- Növeli az újrafelhasználhatóságot, a típusbiztonságot és a hatékonyságot 

public class MyList<T>
{ 
  List<T> ListOfDate = new List<T>(); 
}

- Ha generikus osztályból származtatunk, akkor öröklődésnél meg kell határoznunk hogy milyen típust fogunk visszaadni a generikusnak 

public class myStringList : MyList<string> {...}

T típusparaméter
- T teljesen tetszőleges típus lehet? Nem feltétlenül
- Ha az előbbi összehasonlításnál "=="-t használtunk volna, nem működött volna a string típus miatt. Ha a CompareTo() metódust használtuk volna, akkor is csak megszorítással müködhet:
  class Memorable<T> where T:Comparable<T> {...}
- Két tetszőleges érték összehasonlítható a CompareTo()-val, ha megvalósítják az IComparable interfacet
- Osztályon kívül is készíthetünk generikus metódusokat és interfészeket is

Lambda-kifejezések és névtelen függvények
- A lambda kifejezéssel névtelen függvényt hozhat létre
- Fontos eleme a => operátor
- Bal oldalán bemeneti paraméter(ek), jobb oldalona törzs
- Lambda kifejezés törzse egy kifejezés:
  (input-parameters) => expression
- Lambda utasítás, melynek törzse egy utasításblokk:
  (input-parameters) => { <sequence-of-statements> }
- Using listát bővítjük: 
  System.Linq
- Bármely lambda kifejezés delegált típussá alakítható. A .NET-ben a System.Action és System.Func tartalmazzák a legtöbb delegált típus definícióját. Ha a lambda kifejezés nem ad vissza értéket, akkor Action típusra konvertálható, ha visszaad értéket, akkor Func-ra.
  Func<int, int> square = x => x * x;
  Console.WriteLine(square(5));
  ---
  Action<string> greet = name =>
  {
    string greeting = $"Hello {name}!";
    Console.WriteLine(greeting);
  };
  greet("World");
Delegáltak
- A delegált objektum adott típusú (alakú) metódusok becsomagolását (képviseletét) célozza, amikor eltárolja azok hivatkozásait, illetve meghívja őket.
- A delegált valójában egy függvénytypu-definíció, minek alakja a következő:
  delegate típus delegáltnév (típus paraméternév, ...);
  ---
  delegate int MyDelegate (int num1, int num2);
- Az előbbi példában tehát MyDelegate delegált típust definiáltuk. Ez olyan függvénytípus, amelyiknek 2 egész paramétere van, és eredményül egy egész számot ad.
Delegált használata
  myDelegate d =new myDelegate(calculateSum); //létrehozunk egy példányt a delegáltból, melynek paramétere egy függvény
  int result = d(5, 6); //meghívjuk a calculateSum-ot delegáltat használva
  Console.WriteLine(result);
  static int calculateSum(int x, int y) //definiálunk egy metódust, mely 2 egész számot összead
  {
    return x + y;
  }
  public delegate int myDelegate(int num1, int num2); //definiálunk egy delegáltat
Lambda-kifejezések
- A lambda kifejezés bemeneti paramétereit zárójelek között kell megadnia. Nulla bemeneti paraméter megadása üres zárójelekkel
  Action line = () => Console.WriteLine();
- Egy bemeneti paraméternél nem kell zárójel
  Func<double, double> cube = x => x * x * x;
- Két vagy több bemeneti paraméternél nem kell zárójel
  Func<int, int, bool> testEq = (x, y) => x == y;
Lekérdező kifejezések
- A System.Linq.Enumerable osztályban definiált bővítő metódusokkal SQL-szerű szintaxist valósíthatunk meg
  List<string> cities = new List<string> 
  {
    "Zalaegerszeg", "Miskolc", "Székesfehérvár", "Debrecen", "Eger", "Kőszeg"
  };
  IEnumerable<strin> citiesToDisplay = cities
                                            .where(c => c.Length > 6)
                                            .OrderBy(c => c.Length)
- Ennek a lekérdezésnek van egy másik szintaxisa is:
  var citiesToDisplay = from c in cities
                        where c.Length > 6
                        orderby c.Length
                        select c
Bővítő metódusok
- Where metódus, amellyel szűrhetünk
  Where - A feltételnek eleget tevő elemeket adja vissza
  Distinct - Csak a külöböző elemeket adja vissza
  Take - Első n elemet adja vissza
  ---
  Enumerable<DateTime> datesToDisplay = dates.Where(d = d.Year > 2000)
  Enumerable<Book> selectBooks = books.Where(b=> b.Title.Contains("világháború")).Distinct().Take()
- OrderBy metódus, mellyel rendezünk, akár több szinten is
  OrderBy, ThenBy - növekvő sorrend
  OrderByDescending, ThenByDescending - csökkenő srrend
  Reverse - fordított sorrend
  ---
  Enumerable<Person> selectPersons = persons.OrderBy(p=>p.FirstName)
                                            .ThenBy(p=>p.LastName)
                                            .ThenByDescending(p=>p.DateOfBirth)
- Select metódus, egy sorozat minden egyes elemét átalakítja, vagy projekciót készít belőlük
  Transzformációra:
  var numbers = new[]{ 1, 5, 3, 4, 7};
  var squares = numbers.Select(n => n*n)
  foreach(var square in squares) 
  { 
    Console.WriteLine($"{square}");
  }
  Projekcióra:
  class Employees {public string Name,...}
  var List<Employees> employees = new List<Employee>() {...}
  var names = employees.Select(e => e.Name)
  foreach (var e in names)
  {
    Console.WriteLine(name);
  }
Késleltetett végrehajtás
  List<int> nuzmbers = ew List int(){ 1, 2 }
  Enumerable<int> query = number.Select(n => n*10)
  numbers.Add(3)
  foreach(int o in query)
  {
    Console.WriteLine($"{n} ");
  }
Operátorok ezeknek:
  First
  Last
  ElementAt()

  Count()
  Min, Max
  Sum, Average

  ToArray
  ToList

##Dátum és idő tárolása
- DateTime struktúra valósítja meg, ez mindig a valós idő egy adott pillanatát tárolja
- A DateTime típusú változó értéke: 1.01.01 00:00:00 - 9999.12.31 23:59:59
- Dátum és idő megadása:
  *DateTime csakdatum = new DateTime(2023, 5, 3);*
  *DateTime mindketto = new DateTime(2023, 5, 3, 8, 0, 0);*
  //év, hónap, nap, óra, perc, másodperc - egész típusúak
###Eltelt idő tárolása
- TimeSpan struktúra valósítja meg
pl. *TimeSpan elteltIdo = new TimeSpan (2, 10, 30);*
  //2 óra 10 perc 30 másodperc
  *TimeSpan elteltDatumIdo = new TimeSpan (1, 2, 10, 30);*
  //1 nap 2 óra 10 perc 30 másodperc
pl. Hány nap van Karácsonyig?
  *DateTime d1 = new DateTime(2023, 12, 24);*
  *DateTime aktualisIdo = DateTime.Now;*
  *TimeSpan elteltIdo = d1 - aktualisIdo;*
  *Label1.Text = elteltIdo.Days.ToString();* //napokban kiírva
Másik módszer:
  TimeSpan elteltIdo = d1.Subtract(aktualisIdo);
###DateTime tulajdonságok és metódusok
- Aktuális dátum: **Now** tulajdonság
  *DateTime aktualisIdo = DateTime.Now;*
- **Month, Day** tulajdonságok
  *DateTime d1 = new DateTime(2023, 12, 24);*
  *int honap = d1.Month;* //12
  *int nap = d1.Day;* //24
- **Year, Hour, Minute, Second** tulajdonságok
- **DayOfWeek, DayOfYear** tulajdonságok. *ToString()*-gel kiírtva a nap angol nevét int-té konvertálva a nap sorszámát kapjuk meg
pl. 
*DateTime d1 - new DateTime(2023, 12, 24);*
*label1.Text = d1.DayOfWeek.ToString();* //Sunday
*int hetnapja = (int) d1.DayOfWeek;* //7
- **IsLeapYear** metódus
  *DateTime d1 = new DateTime(2023, 12, 24);*
  *int ev = d1.Year;*
  *if (DateTime.IsLeapYear(ev)) {label1.Text = "Szököév";}*
  *else {label1.Text = "Nem szököév"};*
- 2 dátum összehasonlítása: **Compare** metódus
  *if (DateTime.Compare(d1, d2) < 0) {label1.Text = "d1 a korábbi dátum"};*
  *else if (DateTime.Compare(d1, d2) == 0) {label1.Text = "A két dátum megegyezik"};*
  *else {label1.Text = "d1 a későbbi dátum"};*
- **AddDays, AddHours** metódus
  *DateTime d1 = new DateTime(2023, 12, 24, 20, 0, 0);*
  *DateTime d2 = d1.AddDays(7);* //?
  *DateTime d3 = d1.AddHours(3);* //?
  //Használhatunk **AddMonths, AddSeconds**, stb metódusokat is
###Dátum és idő megjelenítése
- Formátumkódok, mint a táblázatkezelőknél
pl.
  *DateTime d1 = new DateTime(2023, 12, 24, 16, 2, 15);*
  *label1.Text = d1.ToString("yy/M/d");* //23.12.24
  *label1.Text = d1.ToString("yyyy/MMM d ddd");* //2023.dec.24. Vas
  *label1.Text = d1.ToString("HH:mm:ss");* //16:02:15
  *label1.Text = d1.ToString(2HH:mm:ss.fff");* //16:02:15.023
- Rövidített jelölések
pl. *label1.Text = d1.ToString("T");*
- Szöveg konvertálása DateTime típusra:
  *string szovegesdatum = "2016.12.24";*
  *DateTime datum =* ***DateTime.Parse****(szovegesdatum);*

##Típuskonverziók
- **Implicit** (automatikus)
pl. *double d = 12;* //12.0
pl. *int i=13.5;* //adatvesztés lenne, nem működik
- **Explicit** (mi adjuk meg, hogy milyen typusra konvertálja)
  -tipus.**Parse**(string típusú változó) //csak stringből (beolvasáskor ajánlott)
  pl. *string beker = Console.ReadLine();*
      *int szam1 = int.Parse(beker);*
  - **Convert.To**+típus(bármilyen típus) //legtöbb esetben működik
  pl. *int szam2 = Convert.ToInt32(beker);* //Convert osztály metódusai
  - **típuskényszerítés** (castolás)
  pl. *double hanyados = (double)szam1/szam2;*
- **is** és **as** operátorok:
  - **is**-t típusok futásidejű lekérdezésére használjuk
  pl. *if(obj is Jedi) .../ if(obj is Uralkodó) ...*
  - **as** az ellenőrzés mellett egy explicit típuskonverziót is végrehajt
  pl.
    *class Negyzet*
    *{*
      *public int Aoldal;*
    *}*
    *class Teglalap : Negyzet*
    *{*
      *public int Boldal;*
    *}*
    *public void Akarmi(Negyzet n)*
    *{*
      *if(n is Teglalap)*
      *{*
        *(n as Teglalap).Boldal = 20;*
      *}*
    *}*
- Karakterkonverziók: A char típust implicit módon tudjuk numerikus típusra konvertálni, ekkor a karakter Unicode értékét kapjuk vissza
pl.
  *char c = 'a';*
  *int x = c;*
  *Console.WrteLine(x); //97*
pl.
  *int y = 100;*
  *char c2 = (char)y;*
  *Console.WriteLine(c2); //d*