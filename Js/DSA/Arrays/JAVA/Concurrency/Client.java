public class Client {
    public static void main(String[] args) {

        System.out.println(
            Thread.currentThread().getName() + " I am the main class"
        );

        Adder adder = new Adder();
        Subtractor subtractor = new Subtractor();

        Thread t1 = new Thread(adder);
        Thread t2 = new Thread(subtractor);

        t1.start();
        t2.start();
    }
}

class Adder implements Runnable {
    @Override
    public void run() {
        System.out.println(
            Thread.currentThread().getName() + " I am the Adder class"
        );
    }
}

class Subtractor implements Runnable {
    @Override
    public void run() {
        System.out.println(
            Thread.currentThread().getName() + " I am the Subtractor class"
        );
    }
}
