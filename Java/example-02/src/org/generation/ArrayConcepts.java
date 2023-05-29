package org.generation;

public class ArrayConcepts {
	public static void main(String[] args) {
		/*
		 * Traditional arrays:
		 *   int[] array = new int[size];
		 *   int array[] = {num, ..., num};
		 *   
		 * Array characteristics:
		 * + ORDERED elements that allows duplicates
		 * + NOT Resizable, has fixed size
		 * + IS NOT a collection
		 * 
		 */
		int[] colors = new int[4];
		String colorNames[] = {"Blue", "Black", "Yellow"};
		
		// updating array with hex color
		colors[0] = 0x00_00_FF;
		colors[1] = 0x00_00_00;
		colors[2] = 0xFF_FF_00;

		// Formatting text in two ways
		for(int i = 0; i < colors.length; i++) {
			String text = String.format("The color %s has the RGB code 0x%06X",
					colorNames[i], colors[i]);
			System.out.println(text);
			System.out.printf("The color %s has the RGB code 0x%06X\n",
					colorNames[i], colors[i]);
		}
		
		for(String colorName: colorNames) 
			System.out.println(colorName);
		
		/*
		 * Bidimensional arrays:
		 * String[][] array = new String[rows][cols];
		 */
		String[][] people = new String[3][5];
	}
}