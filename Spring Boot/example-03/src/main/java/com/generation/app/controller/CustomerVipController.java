package com.generation.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.app.model.Customer;

@RestController
@RequestMapping("api/customers/vip")
public class CustomerVipController {
	// The customer instance is shared with CustomerController
	@Autowired
	@Qualifier("customerVip")
	private Customer customer;
	
	@GetMapping // http://localhost:8080/api/customers
	public Customer getCustomerById() {
		customer.setFirstName("Pato");
		customer.setLastName("Donald");
		customer.setEmail("pato@google.com");
		
		return customer;
	}
}
