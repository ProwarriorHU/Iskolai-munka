using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2023_11_29
{
    internal class Nov_29
    {
        static void Main(string[] args) { }
        static double GetSzam()
        {
            string inp = Console.ReadLine();
            double ret;
            try
            {
                ret = double.Parse(inp);
            }
            catch (FormatException e)
            {
                Console.WriteLine(e.Message);
                return GetSzam();
            }
            catch (OverflowException e)
            {
                Console.WriteLine(e.Message);
                return GetSzam();
            }

            try
            {
                return Gyok(ret);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return GetSzam();
            }
        }

        static double Gyok(double szam)
        {
            if (szam < 0) throw new Exception("Negatív szám!");
            return Math.Sqrt(szam);
        }
    }
}
