package org.generation.test;

import com.citibanamex.Atm;

public class AtmTest {

	public static void main(String[] args) {	
		// Static getter
		System.out.println(Atm.getCounterAtm());
		
		Atm atmA = new Atm(9_000);
		Atm atmB = new Atm();
		Atm atmC = new Atm("777000");
		
		atmA.displayInfo();
		atmB.displayInfo();
		atmC.displayInfo();
		
		// Unchecked exceptions
		try {
			atmA.deposit(-10);
			atmC.withdraw(2_000_000);
		} catch (IllegalArgumentException | IllegalStateException e) {
			e.printStackTrace();
		}
		
		atmA.deposit(4_000);
		atmB.withdraw(2_500);
	}

}
