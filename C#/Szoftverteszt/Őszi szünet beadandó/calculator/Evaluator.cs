using System.Text.RegularExpressions;

namespace calculator
{
    public class Evaluator
    {
        static void Main(){}
        public double Evaluate(string input)
        {
            string[] operatorsList = new string[] { "+", "-", "*", "/" };
            int[] numbers = new int[2];
            string operator = "";
            validateFormat(input);

            for (int i = 0; i < operatorsList.Length; i++)
            {
                if (input.Contains(operatorsList[i]))
                {
                    string[] expression = input.Split(operatorsList[i]);
                    operator = operatorsList[i];
                    for (int k = 0; k < 2; k++)
                    {
                        numbers[k] = int.Parse(expression[k].Trim());
                    }
                    break;
                }
            }

            switch (operator)
            {
                case "+":
                    return numbers[0] + numbers[1];
                case "-":
                    return numbers[0] - numbers[1];
                case "*":
                    return numbers[0] * numbers[1];
                case "/":
                    return numbers[0] / numbers[1];
                default:
                    throw new Exception();
            }
        }

        static void validateFormat(string input)
        {
            Regex validRegex = new Regex(@"^[0-9]+[+\-*\/][0-9]+$");
            Console.WriteLine(input);
            if (!validRegex.IsMatch(input))
            {
                throw new ArgumentException("Input format invalid");
            }
            if (input.Contains("/") && input[input.Length - 1].ToString() == "0")
            {
                throw new DivideByZeroException();
            }
        }
    }

}