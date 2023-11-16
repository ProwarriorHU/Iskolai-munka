namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)


        {




            string w = new string[];


            Console.WriteLine("Hello, World!");

            StreamReader fr = File.OpenText("d:\\x.txt");
            StreamWriter fw = File.CreateText("d:\\masolat.txt");
            StreamWriter fw = File.CreateText("d:\\masolat.txt");

            string w = fr.ReadLine();

            while (!fr.EndOfStream)
            {
                fw.WriteLine(w);
                w = fr.ReadLine();
            }
            fr.Close();
            fw.Close();

            Console.WriteLine("Kiirt szöveg:");

            Console.ReadLine("Kiirando szöveg:");

            Console.ReadKey();
        }
    } 
}