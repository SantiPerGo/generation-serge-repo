package org.generation.accessingdatajpa.repository;

import java.util.List;

import org.generation.accessingdatajpa.entity.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
	List<Customer> findByLastName(String lastName);
	Customer findById(long id);
}
