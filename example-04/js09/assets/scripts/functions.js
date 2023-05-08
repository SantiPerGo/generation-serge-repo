const sum = (a, b) => (a*1000 + b*1000) / 1000;

const palindromeLoop = text => {
    const word = text.toLowerCase().split(" ").join("");
    let isPalindrome = true;

    for (let i = 0; i < word.length / 2; i++) {
        const firstLetter = word.charAt(i);
        const lastLetter = word.charAt(word.length - 1 - i);

        if(firstLetter !== lastLetter) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
};

const palindrome = text => {
    const word = text.toLowerCase().replaceAll(" ", "");
    const wordReversed = word.split("").reverse().join("");
    return word === wordReversed;
}

module.exports = { sum, palindrome };