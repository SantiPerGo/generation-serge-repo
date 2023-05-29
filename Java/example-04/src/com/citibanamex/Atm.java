package com.citibanamex;

public class Atm {
	private int serialNumber;
	private double balance;
	
	private static int counterAtm = 1;
	
	// Constructors
	
	public Atm() {
		setBalance(100_000);
		setSerialNumber(counterAtm++);
	}
	
	public Atm(double balance) {
		this();
		setBalance(balance);
	}
	
	public Atm(String balance) {
		this(Double.parseDouble(balance));
	}
	
	// Setters and getters
	
	public static int getCounterAtm() {
		return counterAtm;
	}
	
	private void setSerialNumber(int serialNumber) {
		this.serialNumber = serialNumber;
	}
	
	private void setBalance(double balance) {
		this.balance = balance;
	}
	
	public int getSerialNumber() {
		return this.serialNumber;
	}
	
	public double getBalance() {
		return this.balance;
	}
	
	// Other methods
	
	public void displayInfo() {
		StringBuilder sb = new StringBuilder();
		
		sb.append("ATM No.");
		sb.append(getSerialNumber());
		sb.append(", Balance: $");
		sb.append(getBalance());
		
		System.out.println(sb);
	}
	
	public void deposit(double amount) throws IllegalArgumentException {
	    String ANSI_RESET = "\u001B[0m";
	    String ANSI_BLUE_BACKGROUND = "\u001B[44m";
		
		if(amount > 0) {
			setBalance(getBalance() + amount);
			System.out.println(ANSI_BLUE_BACKGROUND + "Succesful deposit of $" + amount
					+ ", your new balance is $" + getBalance() + ANSI_RESET);
		} else
			throw new IllegalArgumentException("You cannot deposit zero or negative amounts");
	}
	
	public void withdraw(double amount) throws IllegalArgumentException, IllegalStateException {
	    String ANSI_GREEN = "\u001B[32m";
	    String ANSI_RESET = "\u001B[0m";
		
		if(amount <= 0) 
			throw new IllegalArgumentException("You cannot withdraw zero or negative amounts");
		else if(amount > getBalance())
			throw new IllegalStateException("You cannot withdraw $"
					+ amount + " from your balance $" + getBalance());
		else {
			setBalance(getBalance() - amount);
			System.out.println(ANSI_GREEN + "Succesful withdraw of $" + amount
					+ ", your new balance is $" + getBalance() + ANSI_RESET);
		}
	}
}