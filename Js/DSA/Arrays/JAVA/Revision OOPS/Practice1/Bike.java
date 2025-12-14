public class Bike extends Vehicle {

    public Bike() {
        super(20, 5); // baseFare, costPerKm
    }

    @Override
    public double calculateFare(double distance) {
        return baseFare + (costPerKm * distance);
    }
}
