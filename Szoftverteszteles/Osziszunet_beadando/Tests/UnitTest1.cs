using NUnit.Framework;
using calculator;

namespace Tests
{
    internal class Tests
    {
        Evaluator? eval;
        [OneTimeSetUp]
        public void OneTimeSetUp()
        {
            eval = new Evaluator();
        }
        //Teljes
        [TestCase("2*3",ExpectedResult = 6)]
        [TestCase("100-41", ExpectedResult = 59)]
        [TestCase("2+3", ExpectedResult = 5)]
        [TestCase("10/2", ExpectedResult = 5)]
        public double wholeNumbers(string input)
        {
            return eval.Evaluate(input);
        }

        //Törtek
        [TestCase("5,1-1,3")]
        [TestCase("6,365+1")]
        [TestCase("2,65/1,325")]
        [TestCase("5,143*2,4")]
        public void fractions(string input)
        {
            try
            {
                eval.Evaluate(input);
            }
            catch (ArgumentException)
            {
                Assert.Pass();
            }
            catch (Exception)
            {
                Assert.Fail();
            }
            Assert.Fail();
        }
        [Test]
        public void divisonByZero()
        {
            try
            {
                eval.Evaluate("1/0");
            }
            catch (DivideByZeroException)
            {
                Assert.Pass();
            }
            catch (Exception)
            {
                Assert.Fail();
            }
            Assert.Fail();
        }
        //Hibás
        [TestCase("abcde")]
        [TestCase("2+4+1+3")]
        [TestCase("2*/4")]
        [TestCase("7/+5")]
        [TestCase("6")]
        [TestCase("-")]
        public void BadArgument(string input)
        {
            try
            {
                eval.Evaluate(input);
            }
            catch (ArgumentException)
            {
                Assert.Pass();
            }
            catch (Exception)
            {
                Assert.Fail();
            }
            Assert.Fail();
        }
    }
}