using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2023_12_13
{
    internal class Dec_13
    {
        static void Main(string[] args)
        {
            Random random = new Random();
            bool[,] cells = new bool[int.Parse(Console.ReadLine()), int.Parse(Console.ReadLine())];
            int viruses = 0;
            //Feltölti a mátrixot
            for (int i = 0; i < cells.GetLength(0); i++)
            {
                for (int j = 0; j < cells.GetLength(1); j++)
                {
                    int rnd = random.Next(9);
                    //Vírus lesz 20% eséllyel
                    if (rnd < 2)
                    {
                        cells[i, j] = false;
                        Console.BackgroundColor = ConsoleColor.Green;
                        Console.Write("██ ");
                        Console.BackgroundColor = ConsoleColor.Black;
                        viruses++;
                    }
                    //Nem vírus lesz 80% eséllyel
                    else
                    {
                        cells[i, j] = true;
                        Console.BackgroundColor = ConsoleColor.White;
                        Console.Write("██ ");
                        Console.BackgroundColor = ConsoleColor.Black;
                    }
                }
                Console.WriteLine();
                Console.WriteLine();
            }
            //Ha a vírusok aránya kevesebb mint 80%
            while (Math.Round(cells.GetLength(0) * cells.GetLength(1) * 0.8) > viruses)
            {
                viruses = 0;
                for (int i = 0; i < cells.GetLength(0); i++)
                {
                    for (int j = 0; j < cells.GetLength(1); j++)
                    {
                        //Itt megnézi a szomszédokat
                        int neighbors = 0;
                        for (int k = i-1; k < i+1; k++)
                        {
                            for (int l = j-1; l < j+1; l++)
                            {
                                if (cells[k, l] == false && k + l != i + j)
                                {
                                    neighbors++;
                                }
                            }
                        }
                        //Megfertőződik
                        if (neighbors >= 2 && cells[i, j] == true)
                        {
                            cells[i, j] = false;
                            Console.BackgroundColor = ConsoleColor.Green;
                            Console.Write("██ ");
                            Console.BackgroundColor = ConsoleColor.Black;
                            viruses++;
                        }
                        //Meggyógyul
                        else if (neighbors < 2 && cells[i, j] == false)
                        {
                            cells[i, j] = true;
                            Console.BackgroundColor = ConsoleColor.White;
                            Console.Write("██ ");
                            Console.BackgroundColor = ConsoleColor.Black;
                            viruses--;
                        }
                        //Ha változatlan akkor csak kiírja
                        else if (cells[i, j] == false)
                        {
                            Console.BackgroundColor = ConsoleColor.Green;
                            Console.Write("██ ");
                            Console.BackgroundColor = ConsoleColor.Black;
                            viruses++;
                        }
                        else if (cells[i, j] == true)
                        {
                            Console.BackgroundColor = ConsoleColor.White;
                            Console.Write("██ ");
                            Console.BackgroundColor = ConsoleColor.Black;
                            viruses--;
                        }
                    }
                }
            }
        }
    }
}
