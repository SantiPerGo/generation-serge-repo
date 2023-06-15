package com.generation.app.model;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *	@Data
 *		+ @ToString, @EqualsAndHashCode, @Getter on all fields, and
 *		  @Setter on all non-final fields, and @RequiredArgsConstructor
 *	@Component
 *		+ Is a generic annotation to indicate that a class is an Spring component
 *		  and should be managed by the Inversion Of Control (IOC) container
 *		+ Is applied in a class to be automatically detected by Spring
 *		  and registered as a bean in the application context
 *	@Qualifier
 *		+ It is used to resolve ambiguities when there are several classes (beans) of the
 *		  same type in the application context and you need to specify which bean to inject
 *
 *	Bean = object managed by the Spring Inversion Of Control (IOC) container
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Qualifier("customer")
public class Customer {
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String address;
}
