// Problem 1 A
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.
Using System;

namespace program
{
    class solution_a
    {
      
            int i, sum = 0,n;
            public void sum_to_n()
         {
            Console.Write("Enter the Nth Number : ");
            n = int.Parse(Console.ReadLine());
            for (i = 0; i <= n; i++)
            {
                sum = sum + i;
            }
            Console.WriteLine("\nSum of N Numbers : " + sum);
            
 
        }
    

 class Program
    {
        static void Main(string[] args)
        {
          solution_a obj=new solution_a();
          obj.sum_to_n();
          Console.ReadKey();
        } 
    }
}  

