using ConsoleApp1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestProject1
{
    internal class IOTests
    {
        private void DeleteDefaultFileIfExist()
        {
            if (File.Exists(defaultPath)) File.Delete(defaultPath);
        }
        const string defaultPath = @"C:\Users\juhasz.mate.laszlo\defaultTestFile.txt";
        const string relativePath = @".\juhasz.mate.laszlo\defaultTestFile.txt";
        BusinessLogic? logic;
        [OneTimeSetUp]
        public void OneTimeSetUp()
        {
            DeleteDefaultFileIfExist();
            logic = new BusinessLogic();
        }
        [Test]
        [TestCase(new object[] {defaultPath})]
        [TestCase(new object[] { @"C:\Users\juhasz.mate.laszlo\defaultTestFile.txt" })]
        public void NormalUseCase(object[] args)
        {
            string path = (string)args[0];
            logic!.MakeFile(path);
            Assert.IsTrue(File.Exists(path));
        }
        [Test]
        public void ThrowsArgumentExceptionWhenPathIsRelative()
        {
            Assert.Throws(typeof(ArgumentException), () => logic!.MakeFile(relativePath));
        }
        [TearDown]
        public void TearDown()
        {
            DeleteDefaultFileIfExist();
        }
    }
}
