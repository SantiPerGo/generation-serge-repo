package org.generation;

/**
 * We cannot have multiple public
 * classes in the same file
 */
class Iteration {
	String name;
	
	Iteration(String name) { this.name = name; }
	
	public void iterateNum(int num) {
		System.out.println("Object: " + this.name);
		for (int i = 0; i < num; i++) 
			System.out.println("Iteration: " + i);
	}
}

/**
 * Concurrency = realize multiple tasks simultaneously
 */
class MyThread extends Thread {
	int iterations;
	
	MyThread(String name, int iterations) {
		// Invoking getName parent method
		super(name);
		this.iterations = iterations;
	}
		
	@Override
	public void run() {
		for (int i = 0; i < iterations; i++) {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
			System.out.println("Thread id: " + super.getId() +
				", Thread name: " + super.getName() +
				", Iteration: " + i);
		}
	}
}

public class ThreadInheritance {
	public static void main(String[] args) {
		// Without thread
		Iteration itOne = new Iteration("itOne");
		itOne.iterateNum(5);
		
		// With thread
		MyThread itTwo = new MyThread("itTwo", 5);
		MyThread itThree = new MyThread("itThree", 5);
		itTwo.start();
		itThree.start();
	}
}
