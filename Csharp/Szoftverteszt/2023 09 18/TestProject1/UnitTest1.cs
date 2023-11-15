namespace TestProject1
{
    partial class Részleges
    {

    }
    partial class Részleges
    {

    }
    public class Tests
    {
        [OneTimeSetUp]
        public void OneTimeSetUp()
        {
            File.AppendAllText("OneTimeSetUp.txt", "+\n");
        }
        [TearDown]
        public void TearDown()
        {
            File.AppendAllText("TearDown.txt", "+\n");
        }
        [OneTimeTearDown]
        public void OneTimeTearDown()
        {
            File.AppendAllText("OneTimeTearDown.txt", "+\n");
        }
        [SetUp]
        public void Setup()
        {
            File.AppendAllText("SetUp.txt", "+\n");
        }

        [Test]
        public void Test1()
        {
            Assert.Pass();
        }
        [Test]
        public void Test2()
        {
            try
            {
                int.Parse("asd");
            }
            catch (FormatException)
            {

            }
            catch (Exception)
            {
                throw;
            }
            finally
            {

            }
            //Assert.Pass();

        }
    }
}