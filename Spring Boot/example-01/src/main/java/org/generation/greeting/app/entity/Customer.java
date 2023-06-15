package org.generation.greeting.app.entity;

import java.io.Serializable;

/**
 * Serializable (interface)
 * 		+ Indicates that the class could be serialized
 * 		+ Serialization is converting the class into a sequence of bytes
 * 		  that can be saved into a file or transmitted over the network
 */
public class Customer implements Serializable {
	private static final long serialVersionUID = 1L;
	private int id;
	private String name;
	private String lastName;
	
	public Customer(int id, String name, String lastName) {
		super();
		this.id = id;
		this.name = name;
		this.lastName = lastName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}
