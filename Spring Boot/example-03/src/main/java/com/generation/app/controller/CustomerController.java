package com.generation.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.app.model.Customer;

import lombok.extern.slf4j.Slf4j;

// Spring log for java (lombok)
@Slf4j
@RestController
@RequestMapping("api/customers")
public class CustomerController {
	/**
	 *	Dependency Injection
	 *
	 *	+ Is a design pattern
	 *	+ Performs automatically dependency management 
	 *	+ Instead of creating the objects directly, it provides
	 *	  the dependencies via a control inversion container (IOC)
	 *	+ Spring container has the responsibility to create and manage objects
	 *
	 *	@Autowired
	 *		+ Is used to inject a dependency
	 *		+ Spring search an compatible object in the 
	 *		  application context and injects it
	 */
	@Autowired
	@Qualifier("customer")
	private Customer customer;
	
	// Creating a new instance in each request saturates the memory
	// private Customer customer = new Customer();
	
	@GetMapping // http://localhost:8080/api/customers
	public Customer getCustomerById() {
		customer.setFirstName("Pato");
		customer.setLastName("Donald");
		customer.setEmail("pato@google.com");
		
		log.info("Get Customer By Id Petition");
		
		return customer;
	}
}
