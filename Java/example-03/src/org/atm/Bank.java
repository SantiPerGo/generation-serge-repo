package org.atm;

import java.util.ArrayList;

public class Bank {
	String address;
	int sucursalNumber;
	ArrayList<ATM> ATMs; // = new ArrayList<>();
	static int counterBank = 1;
	
	{
		ATMs = new ArrayList<>();
	}
	
	// default constructor has no parameters
	Bank(){
		sucursalNumber = counterBank++;
	}
	
	Bank(String address){
		this(); // default constructor invocation
		this.address = address;
	}
	
	String getATMs() {
		String text = "";
		for (ATM Atm : ATMs) 
			text += Atm.serialNumber + "  $" + Atm.balance + "\n";
		return text;
	}
}
