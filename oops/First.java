package oops;


class Calculator{

    public int sum(int a,int b){

        int result =a+b;
        return result;
    }
}
public class First {
    public static void main(String[] args) {
int num1=20,num2=400;
Calculator cl=new Calculator();

int finalresult=cl.sum(num1,num2);
System.out.println(finalresult);
}
    
}
