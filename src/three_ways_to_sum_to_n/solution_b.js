// Problem 1 B
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ConsoleApp2
{
   public class Detail
    {
        
        public
            int n;
          public  void get_detail()
        {
           
            Console.WriteLine("Enter the Nth number");
            n = int.Parse(Console.ReadLine());
        }

    }
     class operation : Detail
        {
            int sum=0,i=0;
            public void set_detail()
            {
                while (i<= n)
                {
                    sum = sum + i;
                    i++;
                    }
                Console.WriteLine("Sum of " + n + "\t number is:" + sum);
            Console.ReadKey();



                
                }
        }
    class Program
    {
            static void Main(string[] args)
            {
                operation obj = new operation();
                obj.get_detail();
                obj.set_detail();
            }

                   
    }
}
