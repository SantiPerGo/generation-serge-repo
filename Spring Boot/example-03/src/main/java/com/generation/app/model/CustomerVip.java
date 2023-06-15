package com.generation.app.model;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("customerVip")
public class CustomerVip extends Customer {
	@Override
	public void setFirstName(String firstName) {
		super.setFirstName("$" + firstName + "$");
	}
}
