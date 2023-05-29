package org.generation;

class MyThreadRunnable implements Runnable {
	private int iterations;
	private String name;
	
	MyThreadRunnable(String name, int iterations) {
		this.name = name;
		this.iterations = iterations;
	}
	
	public String getName() {
		return this.name;
	}
	
	public long getId() {
		return Thread.currentThread().getId();
	}
		
	@Override
	public void run() {
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		for (int i = 0; i < iterations; i++) {
			System.out.println("Thread id: " + this.getId() +
				", Thread name: " + this.getName() +
				", Iteration: " + i);
		}
	}
}

public class TheadInterface {
	public static void main(String[] args) {		
		// With thread
		MyThreadRunnable itTwo = new MyThreadRunnable("itTwo", 5);
		Runnable itThree = new MyThreadRunnable("itThree", 5);
		
		Thread thread = new Thread(itTwo);
		thread.start();
		
		thread = new Thread(itThree);
		thread.start();
	}
}
