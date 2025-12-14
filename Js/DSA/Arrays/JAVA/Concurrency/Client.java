import java.util.*;
public class Client {
    public static void main(String[] args) {

        // System.out.println(
        //     Thread.currentThread().getName() + " I am the main class"
        // );
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();

        Adder adder = new Adder(a,b);

        // Subtractor subtractor = new Subtractor();

        Thread t1 = new Thread(adder);
        // Thread t2 = new Thread(subtractor);

        t1.start();
        // t2.start();
    }
}

class Adder implements Runnable {
    int a;
    int b;
    Adder(int a,int b){
        this.a=a;
        this.b=b;
    }
    public void sum(int a,int b)
    {
        System.out.println(a+b);
    }
    @Override
    public void run() {
        sum(a,b);
        // System.out.println(
        //     Thread.currentThread().getName() + " I am the Adder class"
        // );
    }
}

class Subtractor implements Runnable {
    @Override
    public void run() {
        // System.out.println(Thread.currentThread().getName() + " I am the Subtractor class");
    }
}
