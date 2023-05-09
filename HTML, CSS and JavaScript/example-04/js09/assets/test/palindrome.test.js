const { palindrome } = require("../scripts/functions.js");

const description = "Testing palindrome with";
test(`${description} "Ana" is True`, () => expect(palindrome("Ana")).toBe(true));
test(`${description} "Bob" is True`, () => expect(palindrome("Bob")).toBe(true));
test(`${description} "Radar" is True`, () => expect(palindrome("Radar")).toBe(true));
test(`${description} "Saoko" is False`, () => expect(palindrome("Saoko")).toBe(false));
test(`${description} "Palabra" is False`, () => expect(palindrome("Palabra")).toBe(false));
test(`${description} "Somos o no somos" is True`, () => expect(palindrome("Somos o no somos")).toBe(true));
test(`${description} "Abba" is True`, () => expect(palindrome("Abba")).toBe(true));
test(`${description} "Anita lava la tina" is True`, () => expect(palindrome("Anita lava la tina")).toBe(true));