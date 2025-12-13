public class ContractEmployee extends Employee {

    public ContractEmployee(int id, String name, double baseSalary) {
        super(id, name, baseSalary);
    }

    @Override
    public double calculateSalary() {
        return baseSalary; // no bonus
    }
}
