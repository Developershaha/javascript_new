package warmup;

public class Start {
    public static void main(String[] args) {

        printStart(4);

    }

    static void printStart(int number) {
        for (int i = 0; i < number; i++) {
            for (int j = 0; j < number; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

}
