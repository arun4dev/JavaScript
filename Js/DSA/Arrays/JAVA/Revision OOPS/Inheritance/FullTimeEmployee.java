public class FullTimeEmployee extends Employee {

    public FullTimeEmployee(int id, String name, double baseSalary) {
        super(id, name, baseSalary);
    }

    @Override
    public double calculateSalary() {
        return baseSalary + (baseSalary * 0.20); // 20% bonus
    }
}
