// package java -dsa.java_concept;


// create generic class oky 
class Demo<T,U>{
    private T first;
    private U second;

    Demo(T first,U second){
        this.first=first;
        this.second=second;
    }

    public void setValue(T first,U second){
        this.first=first;
        this.second=second;
    }

    public String getValue(){
        return this.first + "  "+this.second;
    }


}
public class GenericJava {
    public static void main(String[] args) {

      // Correct object creation
        Demo<Integer, String> d = new Demo<>(5, "Hello");
        Demo<String, String> d1 = new Demo<>("Shahaji", "Kokane");

        System.out.println(d.getValue());
        System.out.println(d1.getValue());
        
    }
}
