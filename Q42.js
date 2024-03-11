/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each
magician’s name. Call show_magicians() to see that the list has actually been modified. */
function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Array of magician's names
var magicianNames = ['DERREN BROWN', ' DAVID BLAINE', ' CRISS ANGEL', 'DYNAMO'];
// Calling makeGreat() to modify the magician names
makeGreat(magicianNames);
// Calling the function to print magician's names
showMagicians(magicianNames);
