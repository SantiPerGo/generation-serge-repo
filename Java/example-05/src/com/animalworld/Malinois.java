package com.animalworld;

final public class Malinois extends Dog {

	public Malinois(String name) {
		super(name);
	}

	@Override
	public String makeNoise() {
		return "woof *malinois noise*";
	}
}
