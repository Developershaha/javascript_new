package warmup;

public class Angle {
    public static void main(String[] args) {
        printStart(5);
    }

    static void printStart(int number){
        for(int i=0;i<number;i++){
            for(int j=0;j<=i;j++){
                System.out.print(i+1);
            }

            System.out.println();
        }
    }
}
