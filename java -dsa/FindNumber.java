// find negative element in the given array 


public class FindNumber {

    public int findNegativeNubmer(int[] number) {
        int count = 0;
        for (int i = 0; i < number.length; i++) {
            if(number[i]<0){
                count++;
            }

        }
        return count;
    }

    public static void main(String[] args) {

        int [] numbers={12,5,6,3,45,5,-6,-3-54,9,54,34,23};
        FindNumber fn = new FindNumber();
        int data=fn.findNegativeNubmer(numbers);
        System.out.println("data"+data);

    }
}