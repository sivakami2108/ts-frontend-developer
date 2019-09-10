// Problem 1 C
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class operation
    {

        static void Main()
        {
            int number, sum = 0;

            Console.Write("Enter a Number : ");
            number = Convert.ToInt32(Console.ReadLine());

            if (number < 0)
            {
                Console.Write("Please Enter Positive Number");
            }
            else
            {
                while (number > 0)
                {
                    sum += number;
                    number -= 1;
                }
            }
            Console.WriteLine("The sum is " + sum);

            Console.ReadKey();
        }
    }
}
