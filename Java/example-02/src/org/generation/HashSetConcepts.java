package org.generation;

import java.util.HashSet;

public class HashSetConcepts {
	public static void main(String[] args) {
		/*
		 * Set characteristics:
		 * + UNORDERED collection that DOESN'T allows duplicates
		 * + Resizable depending of elements
		 * 
		 * Syntax:
		 * HashSet<object> list = new HashSet<>();
		 * 
		 */
		HashSet<String> countries = new HashSet<>();
		
		countries.add("Mexico");
		countries.add("Wakanda");
		countries.add("Spain");
		
		// Cannot add duplicates
		countries.add("Spain");
		
		System.out.println(countries);
		System.out.println("country removed: " + countries.remove("Spain"));
		System.out.println("is USA? " + countries.contains("USA"));
		
		countries.forEach(country -> System.out.println(country));
	}
}
