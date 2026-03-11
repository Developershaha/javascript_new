package warmup;

public class SecondLargest {
    public static void main(String[] args) {
        System.out.println("Hi ");
        int[] arr = { 10, 5, 20, 8 };
        System.out.println(secondLargest(arr)+" second largest element");
    }

    static Integer secondLargest(int[] array) {
        // write logic in this method oky i made this static for accessable in the main
        // method otherwise we need to create object for th
        int firstLargest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        if(array.length<2){
        System.out.println("array container less then two element ");
            return null;
        }

        for (int i = 0; i < array.length; i++) {
            if (array[i] > firstLargest) {
                secondLargest = firstLargest;
                firstLargest = array[i];
            } else if (array[i] > secondLargest && array[i] != firstLargest) {
                secondLargest = array[i];
            }
        }
        return secondLargest;
    }

}
