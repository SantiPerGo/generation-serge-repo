package com.generation.utils;

public class NearPalindrome {
	public boolean isNearPalindrome(String originalText) {
		String text = originalText.toLowerCase().replace(" ", "");
		boolean oneletterChanged = false;

		for(int i = 0; i < text.length()/2; i++) {
			char firstLetter = text.charAt(i);
			char secondLetter =
					text.charAt(text.length() - i - 1);
			
			if(firstLetter == secondLetter)
				continue;
			else if(!oneletterChanged) {
				oneletterChanged = true;
				continue;
			} else
				return false;
		}
		
		return oneletterChanged;
	}
}
