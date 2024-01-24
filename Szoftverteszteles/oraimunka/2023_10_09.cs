using System.Linq.Expressions;

namespace _2023Okt09_Feladat
{
    internal class Program
    {
        static void Main(string[] args) { }
        class Equation
        {
            public string Input;
            public Equation(string input)
            {
                Input = input;
            }
            public int Solve(string Input)
            {
                int prevNum = 0;
                int solution = 0;
                bool isSolved = false;
                List<int> numbers = new List<int>();
                List<char> operators = new List<char>();
                for (int i = 0; i < Input.Length; i++)
                {
                    if (!Char.IsNumber(Input[i]))
                    {
                        numbers.Add(int.Parse(Input.Substring(prevNum, (i - 1) - prevNum)));
                        operators.Add(Input[i]);
                        prevNum = i;
                    }
                }
                
                while (isSolved == false)
                {
                    if (operators.Contains('('))
                    {
                        //Ide külön solve, mivel prioritás, majd removolja a zárójeleket
                    }
                    //Ide solve
                    for (int j = 0; j < numbers.Count; j++)
                    {
                        
                    }
                    /*switch (ha nem szám)
                     * case +:
                     * 
                     * stb*/
                }
            }
        }
    }
}