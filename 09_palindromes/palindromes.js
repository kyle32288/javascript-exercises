const palindromes = function (string) {
    myArray = Array.from(string.toLowerCase());
    myArray = myArray.filter(c => ((/[a-zA-Z]/).test(c)));
    return myArray.join('') == myArray.reverse().join('');
}
// Do not edit below this line
module.exports = palindromes;
