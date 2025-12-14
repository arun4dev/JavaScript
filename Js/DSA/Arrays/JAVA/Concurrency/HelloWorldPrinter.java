

 class HelloWorldPrinter implements Runnable {
    void print()
    {
        System.out.println("Hello World!"+ Thread.currentThread().getName());
    }
    public void run()
    {
        print();
    }
}
