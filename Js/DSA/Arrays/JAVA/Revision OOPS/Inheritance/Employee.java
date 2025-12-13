public abstract class Employee {

    private final int id;
    private final String name;
    protected double baseSalary;

    protected Employee(int id, String name, double baseSalary) {
        this.id = id;
        this.name = name;
        this.baseSalary = baseSalary;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public abstract double calculateSalary();
}
