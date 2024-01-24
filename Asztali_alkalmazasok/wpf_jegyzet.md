# WPF
- Windows Presentation Foundation
- 2006 - .NET 3.0
- Animációk deklaratív definiálása
- Grafikus gyorsítás (DirectX)
- Adatkötés (data binding - autmatikus szinkronban felhasználói felület és üzleti logika (C#) között)

Asztali alkalmazások grafikus felhasználói felületének (UI) .NET alapokon történő kialakítására szolgáló alkalmazásprogramozási felület (API)

Deklaratív felhasználói felület (XAML jelölőnyelvvel)

Vektorgrafikus elemek. Pl bezier curve, olyan mint az svg. Nem veszít minőséget ha ránagyítunk és kevesebb tárhelyet foglal.

## Window osztály
Fő ablak - biztosítja az alapértelmezett keretet, címsort, minimizáló, maximizáló és bezáró gombot

A 'Window' a gyökérobjektum, melynek csak EGY gyerekeleme lehet *(mint pl a DOM-ban a 'Document')*, ezért hoza létre a VS számunkra a 'Grid' objektumot benne, mert ez egy panel, ami bármennyi további panelt, vagy vezérlőt tartalmazhat

## WPF projekt alapvető állományai
Az **App.xaml** fájlban az alkalmazás erőforrásait és indítái beállításait lehet definiálni. Ez a fájl az '*Application*' gyökérelemmel kezdődik.

A **StartupUri** tulajdonság az alkalmazás elindulásakor először megjelenő ablakra mutat

Adatokat adhatunk meg erőforrásként ('*Resources*'), melyeket lokálisan az ablakhoz rendelünk, vagy globálisan, az egész alkalmazásban használhatunk.

**App.xaml.cs** - háttérkód

A létrehozott osztály az '*Application*' osztály kiterjesztése lesz, ez az alkalmazás fő osztálya, feladata WPF alkalmazásunk elindítása és futtatása.

## Tulajdonságok
### Nyomógomb megjelenítése példa:
```cs
<Grid>
    <Button x:Name="Gomb"
    Content="Gomb"
    Width="150" Height="30"
    HorizontalAlignment="Center" VerticalAlignment="Top"
    Background="Azure" Foreground="Blue"
    FontFamily="Time New Roman" FontSize="20"
    FontStyle="Italic" FontWeight="Heavy" Opacity="0.5"></Button>
</Grid>
```
Az **x:Name** nem a '*Button*' objektum tulajdonsága, hanem egy olyan jellemző amely azonosítót (futás idejű nevet) rendel az objektumpéldányhoz

### Az előző feladat megoldása C#-ban:
```cs
Gomb.Content = "Valami a felirat";
Gomb.Width = 150;
Gomb.Height = 30;
Gomb.HorizontalAlignment = HorizontalAlignent.Center;
Gomb.VerticalAlignment = VerticalAlignent.Top;
Gomb.Foreground = Brushes.Blue;
Gomb.Background = new SolidColorBrush(Colors.Azure);
Gomb.FontFamily = new FontFamily("Times New Roman");
Gomb.FontSize = 20;
Gomb.FontStyle = FontStyles.Italic;
Gomb.FontWeight = FontWeight.Heavy;
Gomb.Opacity = 0.5;
```