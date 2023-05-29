package com.animalworld;

import com.pet.Pet;

/**
 * With final the class cannot be used for 
 * inheritance to create another child class
 */
final public class Chihuahua extends Dog implements Pet {
	
	private String ownerName;
	public static final String COUNTRY_OF_ORIGIN = "Mexico";

	public Chihuahua(String name) {
		super(name);
	}
	
	@Override
	public String makeNoise() {
		return "guau guau *chihuahua noise*";
	}

	@Override
	public String trick() {
		return super.getName() + " trick: *chihuahua starts to shake*";
	}

	@Override
	public void setOwnerName(String name) {
		this.ownerName = name;
	}

	@Override
	public String getOwnerName() {
		return this.ownerName;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append(super.toString());
		builder.append("\tChihuahua [ownerName=");
		builder.append(ownerName);
		builder.append(", countryOfOrigin=");
		builder.append(COUNTRY_OF_ORIGIN);
		builder.append("]\n");
		return builder.toString();
	}
}
