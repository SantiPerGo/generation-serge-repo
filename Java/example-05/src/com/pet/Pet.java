package com.pet;

/**
 * Interface is a formal declaration of a contract,
 * where the methods don't contain implementations
 * 
 * One class can implement multiple interfaces
 * 
 * Inheritance with abstract classes are used when
 * all of them have some relationship each other
 * 
 * Interfaces are used on design patterns
 *
 */
public interface Pet {
	// interface attributes are public, final and static by default
	// constant variable names are in uppercase
	boolean IS_PET = true;
	
	// methods are public and abstract by default
	String trick();
	void setOwnerName(String name);
	String getOwnerName();
	
	// from java 8 we can add implementation to default methods
	default String greeting() {
		return "I'm a pet";
	}
}
