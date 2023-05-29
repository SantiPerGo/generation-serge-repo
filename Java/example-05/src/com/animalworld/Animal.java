package com.animalworld;

/**
 * Abstract classes:
 * + Cannot be instantiated
 * + Are used to create concrete subclasses
 * + Are declared in the class signature 
 * + Uses the reserved keyword "abstract"
 * + Can contains abstract or concrete methods
 * + Recommended for subclasses with a relationship
 * 
 * Abstract methods:
 * + Are declared without implementation
 * + The implementation is defined in a subclass
 * + End with a ";" symbol
 * + We cannot have abstract methods on normal
 * 	 classes, only in abstract classes
 * 
 * @author Santi
 * 
 */
public abstract class Animal {
	private String name = "---";
	private String type = "---";
	private double sizeMts;
	private double weightKg;
	private boolean alive;
	
	// Constructors
	
	public Animal(String name) {
		// The parent class is Object
		super();
		this.name = name;
	}
	
	// Abstract methods 
	
	public abstract String showPicture();
	
	

	// Common methods
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Animal [name=");
		builder.append(name);
		builder.append(", type=");
		builder.append(type);
		builder.append(", sizeMts=");
		builder.append(sizeMts);
		builder.append(", weightKg=");
		builder.append(weightKg);
		builder.append(", alive=");
		builder.append(alive);
		builder.append("]\n");
		return builder.toString();
	}

	public String eat(String food) {
		return this.name + " is eating " + food;
	}
	
	public String sleep(int minutes) {
		return this.name + " sleeps " + minutes + " minutes";
	}
	
	// Getters and setters

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getSizeMts() {
		return sizeMts;
	}

	public void setSizeMts(double sizeMts) {
		this.sizeMts = sizeMts;
	}

	public double getWeightKg() {
		return weightKg;
	}

	public void setWeightKg(double weightKg) {
		this.weightKg = weightKg;
	}

	public boolean isAlive() {
		return alive;
	}

	public void setAlive(boolean alive) {
		this.alive = alive;
	}
}