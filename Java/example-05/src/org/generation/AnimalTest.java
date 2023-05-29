package org.generation;

import java.util.ArrayList;

import com.animalworld.*;

public class AnimalTest {
	public static void main(String[] args) {
		Animal firulais = new Dog("Firulais");		
		System.out.println(firulais.eat("croquettes"));
		System.out.println(((Dog)firulais).eat("croquettes", .100));
		
		// Using downcasting to call the overwrote method "eat"
		Animal hercules = new Chihuahua("Hercules");
		System.out.println(((Chihuahua)hercules).trick());
		
		Animal benancio = new Malinois("Benancio");
		Animal colmillo = new Wolf("Colmillo", "Alfa");
		Animal jacob = new Wolf("Jacob", "Beta");
		
		ArrayList<Animal> shelter = new ArrayList<>();
		shelter.add(firulais);
		shelter.add(hercules);
		shelter.add(benancio);
		shelter.add(colmillo);
		shelter.add(jacob);
		shelter.forEach(animal -> makeNoiseCanine(animal));
	}
	
	public static void makeNoiseCanine(Animal canine) {
		// Calling the method toString when printing the object
		System.out.println(canine);
		
		// Verifying the class type
		if(canine instanceof Canine)
			System.out.println(canine.getName() + ": "
				+ ((Canine)canine).makeNoise());
		else
			System.out.println("Sorry, " + canine.getName()
				+ " is not a canine");
	}
}
