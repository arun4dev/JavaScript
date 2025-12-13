enum WalletStatus {
   ACTIVE,
   SUSPENDED
}

public class GooglePayWallet {

   private final int walletId;
   private final String ownerName;
   private double balance;
   private WalletStatus status;

   public GooglePayWallet(int walletId, String ownerName) {
       this.walletId = walletId;
       this.ownerName = ownerName;
       this.balance = 0;
       this.status = WalletStatus.ACTIVE;
   }

   public double getBalance() {
       return balance;
   }

   public void addMoney(double amount) {
       if (status != WalletStatus.ACTIVE)
           throw new IllegalStateException("Wallet is suspended");

       if (amount <= 0)
           throw new IllegalArgumentException("Invalid amount");

       balance += amount;
   }

   public void spendMoney(double amount) {
       if (status != WalletStatus.ACTIVE)
           throw new IllegalStateException("Wallet is suspended");

       if (amount <= 0)
           throw new IllegalArgumentException("Invalid amount");

       if (balance < amount)
           throw new IllegalStateException("Insufficient balance");

       balance -= amount;
   }

   // Admin only
   void suspendWallet() {
       status = WalletStatus.SUSPENDED;
   }

   void activateWallet() {
       status = WalletStatus.ACTIVE;
   }
}
