package org.generation.test;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ExceptionsConcepts {

	public static void main(String[] args) {
		/*
		 * Exception = unexpected situation during the program execution
		 * Stacktrace = group of exceptions that are shown since one
		 * 			exception occurred
		 * 
		 * There are 2 types:
		 * 
		 * A) Checked: inherited of the Exceptions class, it has to
		 * be declared in the method signature or in a try-catch block
		 * 
		 * try { ... } catch (Exception e) { ... } finally { ... }
		 * 
		 * void method(...) throws Exception { ... }
		 * 
		 * B) Unchecked: inherited of the RuntimeException so
		 * it's optional to use try-catch or method signature 
		 * 
		 */
		System.out.println("Program start");

		try {
			// Checked exception with try-catch
			readFile();
			
			// Unchecked exceptions
			double[] array = new double[1];
			array[5] = 5 / 0;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (ArithmeticException e) {
			e.printStackTrace();
		} catch (IndexOutOfBoundsException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("Program end");
	}

	// Checked exception in the signature method
	static void readFile() throws FileNotFoundException {
		File file = new File("myfile.txt");
		Scanner sc = new Scanner(file);
		sc.close();
	}
}
