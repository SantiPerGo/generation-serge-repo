package org.generation.greeting.app.controller;

import org.generation.greeting.app.entity.Customer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @RestController
 * 		+ Indicates an API REST controller
 * 		+ Is the combination of @Controller and @ResponseBody
 * 		@Controller
 * 			+ Indicates an MVC controller that receives requests and returns responses
 * 		@ResponseBody 
 * 			+ Indicates that the methods returns the result in the body of the HTTP response 
 * 			+ The objects returned by the methods are automatically serialized to JSON format
 * 			+ The default response format is JSON
 * @RequestMapping 
 * 		+ Is responsible for mapping an http request to the indicated url
 * 		+ Can be applied at the class or method level
 * 		+ In a class level the prefix will be common for the methods
 * @GetMapping, @PostMapping, @PutMapping, @DeleteMapping
 * 		+ Is responsible for mapping GET, POST, PUT and DELETE requests
 * 		+ Indicates the route between parenthesis, ex. @GetMapping("api/route")
 */
@RestController
@RequestMapping("api/greeting") // http://localhost:8080/api/greeting
public class GreetingController {
	@GetMapping("ch26") // http://localhost:8080/api/greeting/ch26
	public String greeting() {
		return "Hello World!";
	}
}
