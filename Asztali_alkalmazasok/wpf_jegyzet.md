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

### Grid felosztása

Amellett, hogy szorzókat megadunk szélesség/magasságnak, megadhatunk abszolút értéket
```cs
<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="*" />
        <ColumnDefinition Width="Auto" />
        <ColumnDefinition Width="100" />
    </Grid.ColumnDefinitions>
        <Button>Button 1</Button>
        <Button Grid.Column="1">Button 2 hosszú szöveggel</Button>
        <Button Grid.Column="2">Button 3</Button>
</Grid>
```

### TextBox vezérlő

Egy vagy többsoros szövegek bevitelére asználjuk
```cs
<Grid Margin="10">
    <TextBox AcceptsReturn="True" TextWrapping="Wrap" />
</Grid>
```
*AcceptsReturn="True"* - Enter/Return billentyűk használhatóak

### Button - nyomógomb

Példa:
```cs
<Button>Hello world</Button>
```
Ez a gomb még nem csinál semmit, de fel tudunk iratkozni a Click eseményre:
```cs
<Button Click="HelloWorldButtonClick">Hello world</Button>
```
A C# forráskódban egy megfelelő metódusra lesz szükségünk a 'Click' kezeléséhez:
```cs
private void HelloWorldButtonClick(object sender, RoutedEventArgs e)
{
    MessageBox.Show("Hello world");
}
```

### Checkbox

```cs
private void btnShowMe_Click(object sender, RoutedEvenetArgs e)
    {
        if (cbxOne.IsChecked == true){
            MessageBox.Show("Első");
        }
        if ((bool)cbxTwo.IsChecked){
            MessageBox.Show("Második");
        }
    }
```
Beállíthatjuk, hogy legyen 3 különböző állapota: igaz, hamis, és meg nem határozott (null):
```cs
<CheckBox IsThreeState="True" ... />
```
(Ezért kell az IsChecked értékét bool-ra konvertálni)

#### RadioButton

Több lehetséges opció közül válaszhatunk ki egyet egy időben

#### PassWordBox

Ugyanúgy működik mint a <span style="color:lightblue">TextBox</span> de meg tudjuk védeni az információt a kíváncsi tekintetektől

#### Image

```cs
<Image Source="link ide">
```

Ahelyett hogy külső forrásból töltenénk le a képet, érdemes egybecsomagolni az alkalmazással:

- a Solution Explorerben ->
- *projekt nevére* Jobb Click -> 
- Add -> 
- New Folder: *képek* -> 
- *képek* Jobb Click -> 
- Add -> 
- Existing Item -> 
- Tallózás -> 
- *képfájl* -> 
- Add ->
- *képfájl*: Properties -> 
- Build Action: Resource

Másik fontos tulajdonság a **Stretch**. Lehetséges értékei:
- **Uniform** (alapértelmezett): A kép automatikusan méreteződik hogy beleférjen a rendelkezésre álló helyre. Méretarány viszont kötött, a kép nem torzul
- **UniformToFill:** méretarány itt is kötött, de lehet, hogy a kép egyes részei kilógnak
- **Fill:** a méretarány nem kötött, a kép torzulhat
- **None:** Ha a kép kisebb, mint na rendelkezésre álló terület, semmi sem történik. Ha a kép nagyobb, akkor a kilógó terület le lesz vágva

#### ListBox

Elemek hozzáadása:
```cs
private void button1_Click(object sender, RoutedEventArgs e)
{
    listBox1.Items.Add(textBox.Text);
}
```
Elemek törlése:
```cs
private void DeleteButton_Click(object sender, RoutedEventArgs e)
{
    listBox.Items.RemoveAt(listBox1.Items.IndexOf(listBox1.SelectedItem));
}
```
Elemek rendezése:
```cs
private void button1_Click(object sender, RoutedEventArgs e)
{
    listBox1.Items.SortDescriptions.Add(new System.ComponentModel.SortDescription("Content", System.ComponentModel.ListSorpDirection.Ascending))
}
```

#### ComboBox vezérlő

Egy értéket kiválaszhatunk a legördülő listából

A háttérkódban:
```cs
private void AddButton_Click(object sender, RoutedEventArgs e)
{
    ComboBox1.Items.Add(TextBox1.Text);
}
```

Elem törléséhez:
```cs
ComboBox1.Items.RemoveAt(Combo1,Items.IndexOf(ComboBox1.SelectedItem));
```

### WPF Panelek

Vezérlők amik konténerként működnek más vezérlők számára
- Canvas
- WrapPanel
- StackPanel
- DockPanel
- Grid
- UniformGrid

#### Canvas

Elsősorban rajzok elkészítésére használjuk, de elhelyezhetünk rajta más vezérlőket is, a pozicionálásról mi gondoskodunk (alapból bal felső sarok)

##### Canvas - Z Index

Ha a vezérlők átfedésbe kerülnek, meghatározhatjuk a rétegezési sorrendet. Alapból a később meghatározott kerül felülre.

A zIndex alpból 0 minél nagyobb értékét adunk neki, annál felsőbb rétegbe kerül az objektum.

Alakzatok:
- Ellipse
- Line
- Rectangle
- Polygon
- Polyline
- Path

Közös tulajdonságok:
- Stroke (szegély)
- StrokeThickness
- Fill

##### Path

Ez az osztály görbék és összetett rajzok készítésére szolgál. **StreamGeometry** ségítségével tömören meg tudjuk adni alakzatainkat

Főbb jelölések:
- M - kezdőpont koordinátái pl. M 0,0
- L - vonal végső koordinátái pl. L 10,20
- H - vízszintes vonal x koordináta pl. H 90
- V - függőleges vonal y koordináta pl. V 90
- A - ív, (méret, elforgatás szöge, nagyív(0 vagy 1), ív iránya(0 vagy 1), végpont)
- Z - lezárás, aktuális pontból vonalat húz a kezdő pontba

