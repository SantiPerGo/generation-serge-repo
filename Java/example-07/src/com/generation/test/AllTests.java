package com.generation.test;

import org.junit.platform.suite.api.*;

// Calling classes created for testing
@Suite
@SelectClasses({ MathTest.class, NearPalindromeTest.class })
public class AllTests {

}
