package org.generation;

import java.util.ArrayList;

public class ArrayListConcepts {

	public static void main(String[] args) {
		/*
		 * List characteristics:
		 * + ORDERED collection that allows duplicates
		 * + Resizable depending of elements
		 * + Has the best performance for large number of elements
		 * 
		 * Syntax:
		 * ArrayList<object> list = new ArrayList<>();
		 * 
		 * Note:
		 * Primitive types are faster and requires less memory
		 * than object types like int vs Integer
		 */
		ArrayList<String> bookNames = new ArrayList<>();
		
		bookNames.add("Caperucita Roja");
		bookNames.add("Harry Potter");
		bookNames.add("Hansel y Gretel");
		bookNames.add("Libro Vaquero");
		bookNames.add("El Hobbit");
		bookNames.add("Libro Vaquero");
		
		System.out.println(bookNames);
		System.out.println("book name: " + bookNames.get(3));
		System.out.println("book removed: " + bookNames.remove(0));
		System.out.println("is harry potter? " + bookNames.contains("Harry Potter"));
		
		bookNames.set(1, "Clean Code");
		bookNames.forEach(book -> System.out.println(book));
		
		// Incorrect, because uses references
		ArrayList<String> books = bookNames;
		
		// Correct
		ArrayList<String> booksTwo = (ArrayList)bookNames.clone();
	}

}
