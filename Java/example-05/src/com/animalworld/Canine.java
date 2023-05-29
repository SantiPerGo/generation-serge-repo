package com.animalworld;

/**
 * To apply inheritance we add the reserved keyword
 * "extends" indicating the parent or superior class
 * 
 * One class can implement only one inheritance
 * 
 * We have to answer the question "is a?"
 * Ex. Is a Canine
 * 
 * @author Santi
 *
 */
public abstract class Canine extends Animal {
	
	// Constructors
	
	public Canine(String name) {
		super(name);
	}
	
	// Methods

	/**
	 * Applying overriding of the method in
	 * the parent class with same signature
	 * 
	 * @Override: indicates overriding and verifies
	 * 	in compile time that the subclass match with
	 * 	the method signature in the parent class
	 * 
	 */
	@Override
	public String eat(String food) {
		return "The canine " + super.getName()
			+ " is eating " + food;
	}
	
	// Overloading
	public String eat(String food, double kg) {
		return "The canine " + super.getName()
			+ " is eating " + kg + " kg of " + food;
	}
	
	public String makeNoise() {
		return "grrrr *canine sounds*";
	}
}
