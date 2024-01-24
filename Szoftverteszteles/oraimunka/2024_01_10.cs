namespace _2024_01_10
{
    internal class Program
    {
        static void Main(string[] args)
        {
            
        }
        public class CheckEven
        {
            public bool IsEven(int number)
            {
                return number % 2 == 0;
            }
            public List<int> ListEven(int from, int to)
            {
                List<int> even = new List<int>();
                for (int i = from; i < to; i++)
                {
                    if (IsEven(i))
                    {
                        even.Add(i);
                        Console.Write(even[i]+" ");
                    }
                }
                return even;
            }
        }
    }
}
