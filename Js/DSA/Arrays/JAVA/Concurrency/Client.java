

public class Client {
    public static void main(String[] args) {
        HelloWorldPrinter h = new HelloWorldPrinter();

        Thread t =new Thread(h);
        t.start();

    }
}
