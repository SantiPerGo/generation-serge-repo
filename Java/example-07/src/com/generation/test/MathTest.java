package com.generation.test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

import com.generation.utils.Math;

public class MathTest {
	Math math = new Math();
	
	@Test
	@DisplayName("Sum of Integers Test")
	void sumIntegersTest() {
		assertEquals(10, math.sum(8, 2), "Integer Units Sum");
		assertEquals(54, math.sum(44, 10), "Integer Tens Sum");
		assertEquals(1400, math.sum(800, 600), "Integer Hundreds Sum");
		assertEquals(100_000, math.sum(90_000, 10_000), "Integer Thousands Sum");
		
		assertEquals(-7, math.sum(8, -15), "Negative Integer Units Sum");
		assertEquals(-34, math.sum(-44, 10), "Negative Integer Tens Sum");
		assertEquals(200, math.sum(800, -600), "Negative Integer Hundreds Sum");
		assertEquals(-80_000, math.sum(-90_000, 10_000), "Negative Integer Thousands Sum");
	}
	
	@Test
	@DisplayName("Sum of Doubles Test")
	void sumDoublesTest() {
		double delta = 0.001;
		
		assertEquals(10.02, math.sum(10.01, 0.01), delta, "1 Hundredth Sum");
		assertEquals(10.04, math.sum(10.02, 0.02), delta, "2 Hundredth Sum");
		assertEquals(10.06, math.sum(10.03, 0.03), delta, "3 Hundredth Sum");
		assertEquals(10.08, math.sum(10.04, 0.04), delta, "4 Hundredth Sum");
		assertEquals(10.10, math.sum(10.05, 0.05), delta, "5 Hundredth Sum");
		assertEquals(10.12, math.sum(10.06, 0.06), delta, "6 Hundredth Sum");
		assertEquals(10.14, math.sum(10.07, 0.07), delta, "7 Hundredth Sum");
		assertEquals(10.16, math.sum(10.08, 0.08), delta, "8 Hundredth Sum");
		assertEquals(10.18, math.sum(10.09, 0.09), delta, "9 Hundredth Sum");
	}
}
