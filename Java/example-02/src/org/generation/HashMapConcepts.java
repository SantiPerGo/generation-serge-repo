package org.generation;

import java.util.HashMap;

public class HashMapConcepts {
	public static void main(String[] args) {
		/*
		 * Map characteristics:
		 * + UNORDERED collection
		 * + DOESN'T allows key duplicates
		 * + Allows value duplicates
		 * + Key-value elements
		 * 
		 * Syntax:
		 * HashMap<key, value> list = new HashMap<>();
		 * 
		 */
		HashMap<Integer, String> students = new HashMap<>();
		
		students.put(12341, "Juan Pablo");
		students.put(78390, "Fatima Moreno");
		students.put(57896, "Andrea Lizet");
		students.put(98992, "Santi Perez");
		students.put(11111, "Sofi G");
		
		System.out.println(students);
		System.out.println("student name: " + students.get(78390));
		System.out.println("student removed: " + students.remove(57896));
		
		students.forEach((key, value) ->
			System.out.println("> Student No. " + key + " is " + value));
		
		for(int registerNum: students.keySet())
			System.out.println(registerNum + " - " + students.get(registerNum));
		
		for(String student: students.values())
			System.out.println("* " + student);
	}
}
