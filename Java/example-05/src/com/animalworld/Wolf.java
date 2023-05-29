package com.animalworld;

final public class Wolf extends Canine {
	
	private String role;

	public Wolf(String name, String role) {
		super(name);
		setRole(role);
	}

	@Override
	public String showPicture() {
		return "https://es.wikipedia.org/wiki/Canis_lupus";
	}

	@Override
	public String makeNoise() {
		return "auuuuu *wolf noise*";
	}
	
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}
