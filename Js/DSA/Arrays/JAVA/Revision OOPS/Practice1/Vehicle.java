public abstract class Vehicle {
    protected double baseFare;
    protected double costPerKm;

    protected Vehicle(double baseFare, double costPerKm) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
    }

    public abstract double calculateFare(double distance);
}
