import java.util.Scanner; 
public class mcpi
{
   public static void main(String[] args)
   {						
      Scanner input=new Scanner(System.in);
      System.out.println("Enter the number of points(More points will increase the accuracy of pi):");
      int points=input.nextInt();	   
      double x;
      double y;		//x and y are points on the graph
      double square = 0;						   
      double circle = 0;						   						     			   
     								     
      for (int i = 0; i < points ; i++)				   
      {								   
         x = Math.random();			   
         y = Math.random();		//this gives random points lesser than 1.0 and larger than 0.0		   
         square++;				//each point generated will fall in the square	   							     
      	 if ( x*x + y*y <= 1 )	{	//this is the geometric forumla x^2 + y^2 <= r^2(equation of circle) that is used to check if the point generated falls in the circle or outside.If smaller x^2 + y^2, then the point is outside the circle
         	circle++;			
         }	   			   
      }								   
      System.out.println("The value of Pi is " + 4* (circle/square) ); //here we compute the pi value by dividing the number of points in the circle by number of points in the square and mulitplying it by 4 as (area of circle[πr^2]/area of square[(2r)^2]= points on circle/points on square)
   }
}
