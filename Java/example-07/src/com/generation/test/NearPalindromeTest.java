package com.generation.test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

import com.generation.utils.NearPalindrome;

public class NearPalindromeTest {
	NearPalindrome palindrome = new NearPalindrome();
	
	/**
     * Casi palíndromo
     * 
     * Verificar si una palabra es casi palíndromo, con el cambio de una sola letra.
     * 
     * ej.
     *  Oso -> false (por qué ya es un palíndromo)
     *  Ver -> true ( si reemplazó la r por v -> rer)
     *  Hola -> false ( no es casi un palíndromo: holh, hooa)
     *  Ocho -> true ( occo ) 
     *  veronica -> false ( veronicv, veroniea, veronrca, verooica  )  
     *  Anita lavó la tina -> true ( Anita l[a]v[a] la tina )
     *  
     */
	@Test 
	void nearPalindromeTest() {
		assertEquals(false, palindrome.isNearPalindrome("Oso"), "Oso");
		assertEquals(true, palindrome.isNearPalindrome("Ver"), "Ver");
		assertEquals(false, palindrome.isNearPalindrome("Hola"), "Hola");
		assertEquals(true, palindrome.isNearPalindrome("Ocho"), "Ocho");
		assertEquals(false, palindrome.isNearPalindrome("Veronica"), "Veronica");
		assertEquals(true, palindrome.isNearPalindrome("Anita lavó la tina"), "Anita lavó la tina");
	}
}
