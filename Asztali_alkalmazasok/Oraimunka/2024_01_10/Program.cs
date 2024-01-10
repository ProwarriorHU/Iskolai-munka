namespace _2024_01_10
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Beolvas
            StreamReader f = File.OpenText("tavirathu13.txt");
            while (!f.EndOfStream)
            {
                string line = f.ReadLine();

            }
        }
        public class City
        {
            public string code;
            public string time;
            public string wind;
            public int temp;
            public City(string code, string time, string wind, int temp)
            {
                this.code = code;
                this.time = time;
                this.wind = wind;
                this.temp = temp;
            }

        }
    }
}
