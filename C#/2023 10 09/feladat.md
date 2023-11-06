namespace _2023Okt09
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Halmaz<string> szohalmaz = new Halmaz<string>();
            szohalmaz.Felvisz("alma");
        }
        public class Halmaz<T> where T : IComparable<T>
        {
            public int elemszam;
            public List<T> elems;

            public Halmaz()
            {
                this.elemszam = 0;
                this.elems = new List<T>();
            }
            public bool BenneVanE(T halmazelem)
            {
                int i = 0;
                while (i < elems.Count && !(elems[i].CompareTo(halmazelem) == 0))
                {
                    i++;
                }
                return i < elems.Count;
            }
            public void Felvisz(T felvettElem)
            {
                if (!BenneVanE(felvettElem))
                {
                    Console.WriteLine("Eztet már benne van");
                }
                else
                {
                    elems.Add(felvettElem);
                }
            }
            public void Kitorol(T torles)
            {
                if (!BenneVanE(torles))
                {
                    Console.WriteLine("Nincs mit törölni");
                }
                else
                {
                    elems.Remove(torles);
                }
            }
            public override string ToString()
            {
                string szo = "[";
                for (int i = 0; i < elems.Count; i++)
                {
                    if (i == elems.Count - 1)
                    {
                        szo += $"{elems[i]}]";
                    }
                    else
                    {
                        szo += $"{elems[i]}; ";
                    }
                }
                return szo;
            }
    }
}