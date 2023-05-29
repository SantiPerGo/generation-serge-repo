package org.atm;

public class ATM {
	// instance attributes (non-static fields)
	String serialNumber; // null
	double balance; // 0.0
	
	// class attributes (static fields)
	static String bankName; // null
	static int counterATM; // 0.0
	
	// initialization block of instance attributes
	{
		serialNumber = "---";
		balance = 100_000.00;
	}
	
	// initialization block of class attributes
	static {
		bankName = "Santander S.A de C.V.";
		counterATM = 1;
	}
	
	// constructors
	// "this" = returns the object instance
	ATM(double balance){
		this.balance = balance;
		this.serialNumber =  Integer.toString(counterATM++);
	}
	
	ATM (String serialNumber, double balance){
		this(balance);
	}
	
	// instance methods
	double getBalance() {
		return this.balance;
	}
	
	// class methods
	static String getBankName() {
		return "Bank: " + bankName;
	}
}
