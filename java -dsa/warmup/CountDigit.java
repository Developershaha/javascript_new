package warmup;

public class CountDigit {
    public static void main(String[] args) {
        int totalCount = countDigit(-12345);
        System.out.println("total digit in the given number" + totalCount);

    }

    static int countDigit(int number) {
        int count = 0;

        int num = Math.abs(number);

        if (num == 0) {
            count++;

        }
        while (num > 0) {
            num = num / 10;
            count++;
        }
        return count;
    }

}
