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

## Vezérlőelemek
Minden vezérlőelem őse a '*Control*' osztály

A legalapvetőbb a '**TextBlock**'- ami tulajdonképp nem is vezérlő, nem a '*Control*' osztály leszármazottja, de ugyanúgy kell kezelni, mint a többi vezérlőt, ezért az egyszerűség kedvéért mi vezérlőnek fogjuk nevezni. 

Szövegek megjelenítésére használjuk

A '**Label**' vezérlő is ezt a célt szolgálja, de a '*Label*'-ön képet is megjeleníthetünk. Általában s '*Label*'-ön egy soros szövegek, vagy képek jeleníthetők meg, a TextBlock akár több soros szöveget is megjelenít, és kevésbé erőforrás igényes.

### TextBlock
```cs
<Window x:Class="példaszöveg"
    xmlns="példaszöveg"
    xmlns:x="példaszöveg"
    Title="TextBlockSample" Height="100" Width="200">
<Grid>
    <TextBlock>Ez egy TextBlock</TextBlock>
</Grid>
</Window>
```
Alapból nincs Margin

Ha beleírunk egy hosszabb szöveget:
```cs
<LineBreak /> //Sortörés

<TextTrimming="CharacterEllipsis"> //Valószinűleg nem fogjuk teljesen látni, de jelzi

<TextTrimming="WordEllipsis"> //A végén teljes szó marad

<TextWrapping="Wrap"> //Automatikusan darabolódik a rendelkezésre álló hely függvényében
```

#### Szövegek formázása
```cs
<Bold></Bold>

<Italic></Italic>

<Underline></Underline>

<Span></Span>

<Hyperlink RequestNavigate="Hyperlink_RequestNavigate" NavigateUri="https://www.google.com">link</Hyperlink> //Külső URL-ek eléréséhez a háttérkódban kezelnünk kell a *RequestNavigate* eseményt:
MainWindow.xaml.cs:
private void Hyperlink_requestNavigate(object sender, RequestNavigateEventArgs e)
{
    System.Diagnostics.Process.Start(e.Uri.AbsoluteUri);
}
```