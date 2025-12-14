public class Ride {

    private final double distance;
    private final Vehicle vehicle;
    private final double totalFare;

    public Ride(double distance, Vehicle vehicle) {
        this.distance = distance;
        this.vehicle = vehicle;
        this.totalFare = vehicle.calculateFare(distance);
    }

    public double getTotalFare() {
        return totalFare;
    }
}
