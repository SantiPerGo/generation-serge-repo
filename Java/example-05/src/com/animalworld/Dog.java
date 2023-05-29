package com.animalworld;

public class Dog extends Canine {
	public Dog(String name) {
		super(name);
	}
	
	@Override
	public String eat(String food) {
		return "The " + super.getName()
			+ " dog is happy moving his tail while eating "
				+ food;
	}

	@Override
	public String showPicture() {
		return "https://" + super.getName() + ".com";
	}
}
