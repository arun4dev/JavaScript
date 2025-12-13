public class BankAccount {
    private final int accountNumber;
    private final String accountHolderName;
    private double balance;
    private boolean isActive;

    public BankAccount(int accountNumber, String accountHolderName) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = 0;
        this.isActive = true;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (!isActive)
            throw new IllegalStateException("Account is blocked");

        if (amount <= 0)
            throw new IllegalArgumentException("Invalid deposit amount");

        balance += amount;
    }

    public void withdraw(double amount) {
        if (!isActive)
            throw new IllegalStateException("Account is blocked");

        if (amount <= 0)
            throw new IllegalArgumentException("Invalid withdrawal amount");

        if (balance < amount)
            throw new IllegalStateException("Insufficient balance");

        balance -= amount;
    }

    // Bank system only
    void activateAccount() {
        isActive = true;
    }

    void blockAccount() {
        isActive = false;
    }
}
