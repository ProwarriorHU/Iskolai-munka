﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2023_11_06
{
    internal class Nov_06
    {
        static void Main(string[] args)
        { 
            //Feladat 1.1: Számold ki a hátralévő napokat érettségiig
            DateTime ma = DateTime.Now;
            DateTime erettsegi = new DateTime(2024, 05, 06);
            TimeSpan addig = erettsegi - ma;
            Console.WriteLine(addig.Days);
            //Feladat 1.2: Számold ki a korodat
            DateTime szulnap = new DateTime(2005, 07, 07);
            TimeSpan kor = ma - szulnap;
            Console.WriteLine(kor.Days / 365 + " éves");
            Console.WriteLine((kor.Days % 365) / 30 + " hónapos");
            Console.WriteLine((kor.Days % 365) % 30 + " napos");
        }
    }
}
