namespace Library
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Feladat: Párosok metódus x-től y-ig megnézi a szám páros-e egy másik metódussal. Ezt tesztelni
            EvenOdd(5, 10);
        }
        public static bool IsEven(int num)
        {
            if (num % 2 == 0) { return true; }
            else { return false; }
        }
        public static void EvenOdd(int x, int y)
        {
            for (int i = x; i < y; i++)
            {
                if (IsEven(i)) { Console.WriteLine(i + " páros"); }
                else { Console.WriteLine(i + " páratlan"); }
            }
        }
    }
}