const { sum } = require("../scripts/functions.js");

test("Testing 1 + 3 = 4", () => expect(sum(1, 3)).toBe(4));
test("Testing 1 - 15 = -14", () => expect(sum(1, -15)).toBe(-14));
test("Testing 2.51 + 0.01 = 2.52", () => expect(sum(2.51, 0.01)).toBe(2.52));