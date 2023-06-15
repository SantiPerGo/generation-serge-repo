package org.generation.greeting.app.controller;

import org.generation.greeting.app.entity.Customer;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

/**
 * By convention, endpoint names must be plural nouns
 */
@RestController
@RequestMapping("api/customers") // http://localhost:8080/api/customers
public class CustomerController {
	@GetMapping
	public List<Customer> getCustomers() {
		List<Customer> customers = new ArrayList<>();
		
		customers.add(new Customer(1, "Pato", "Donald"));
		customers.add(new Customer(2, "Michaell", "Sirius"));
		customers.add(new Customer(3, "Angelica", "Vazques"));
		
		return customers;
	}
	
	/**
	 *	@GetMapping with path variable (camelCase or snake_case)
	 *	@PathVariable
	 *		+ Links the values of variables in the URL with method params
	 *		+ http://localhost:8080/api/customers/1/Santi/PerGo
	 */
	@GetMapping("{id}/{name}/{last_name}")
	public Customer getCustomerPath(
			@PathVariable int id,
			@PathVariable String name,
			@PathVariable("last_name") String lastName) {
		
		return new Customer(id, name, lastName);
	}
	
	/**
	 *	@RequestParam
	 *		+ Links the values of variables in the URL with method params
	 *		+ The values with defaultValue or required=false are optional, 
	 *		  without that, throws MissingServletRequestParameterException
	 *		+ Query parameters could be in camelCase or snake_case
	 *		+ http://localhost:8080/api/customers?id=1&name=Santi&last_name=PerGo
	 */
	@GetMapping("query")
	public Customer getCustomerParam(
			@RequestParam("id") int customerId,
			@RequestParam(value="name", required = false) String firstName,
			@RequestParam(value="last_name", defaultValue="Stranger") String lastName) {
		
		// If firstName doesn't have value, it saves null
		return new Customer(customerId, firstName, lastName);
	}
}
