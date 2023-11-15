namespace ConsoleApp1
{
    public class BusinessLogic
    {
        /// <summary>
        /// Létrehoz a megadott útvonalon egy új fájlt. Amennyibn már létezik a megadott útvonalon fájl vagy nem abszolút az elérési út, hibát dob
        /// </summary>
        /// <param name="path">Új fájl abszolút elérési útja</param>
        public void MakeFile(string path)
        {
            if (!Path.IsPathRooted(path)) throw new ArgumentException("A megadott elérési út nem relatív");
            if (File.Exists(path)) throw new IOException("A megadott elérési úton már létezik fájl");
            File.WriteAllText(path, "");
        }
    }
}