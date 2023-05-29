package org.atm;

public class ATMTest {
	public static void main(String[] args) {
		// To use class attributes or methods
		// We don't need to create an instance
		String bankName = ATM.getBankName();
		System.out.println(bankName);
		
		// Instantiating object class
		ATM cajeroA = new ATM("A1", 50_000.00);
		ATM cajeroB = new ATM("A2", 75_000.00);
		ATM cajeroC = new ATM(60_000);
		
		System.out.println(cajeroA.serialNumber +" $"+ cajeroA.getBalance());
		System.out.println(cajeroB.serialNumber +" $"+ cajeroB.getBalance());
		System.out.println(cajeroC.serialNumber +" $"+ cajeroC.getBalance());
	}
}
