// Letter-To-Word Game!

// list of the uppercase alphabet
const up_alpha = Array.from(Array(26)).map((e, i) => i + 65);

const uppercase_alphabet = up_alpha.map((x) => String.fromCharCode(x));

// list of the lowercase alphabet
const low_alpha = Array.from(Array(26)).map((e, i) => i + 97);
const lowercase_alphabet = low_alpha.map((x) => String.fromCharCode(x));

const show_up_alphabet = up_alpha.map((x) => String.fromCharCode(x));
const show_low_alphabet = low_alpha.map((x) => String.fromCharCode(x));
const used_alphabet = [];

class Letters{
    constructor (_letter) {
        this.letter = _letter;
    }
    // This function removes used letters from the option list
    append_letters(letter){
    var idx_low = show_low_alphabet.indexOf(letter);
    var idx_up = show_up_alphabet.indexOf(letter);
    if ((/[a-z]/).test(letter) == true){
        if (idx_low !== -1){
            show_low_alphabet.splice(idx_low, 1); // Removing used letter from lowercase list
        }
        var temp_letter = letter.toUpperCase();
        var temp_idx = show_up_alphabet.indexOf(temp_letter);
        if (temp_idx !== -1){
            show_up_alphabet.splice(temp_idx, 1); // Removing used letter from uppercase list
        }
        used_alphabet.push(letter);
        used_alphabet.push(temp_letter);
    }
    if ((/[A-Z]/).test(letter) == true){
        if (idx_up !== -1){
            show_up_alphabet.splice(idx_up, 1); // Removing used letter from lowercase list
        }
        var temp_letter1 = letter.toLowerCase();
        var temp_idx1 = show_low_alphabet.indexOf(temp_letter1);
        if (temp_idx1 !== -1){
            show_low_alphabet.splice(temp_idx1, 1); // Removing used letter from uppercase list
        }
        used_alphabet.push(letter);
        used_alphabet.push(temp_letter);
    }
}

}
console.log("You have 20 seconds to think of a word!");
console.log("Input a letter: ");

// Checking if letter is valid
function checking_inputs(){
    var check = 1;
    var count = 0;
    while (show_low_alphabet.length != 0){
        while (check == 1){
            var letter = prompt();
            if (used_alphabet.includes(letter)){
                console.log("You already used this letter! Try again:"); // Checking if the letter was already used
                continue;
            }
            if (letter.length > 1 || !(/[a-zA-Z]/).test(letter)){  // Checking that it's a single letter
                console.log("That's not a letter! Try again: ");
                continue;
            }
            else {
                check = 2;
            }
            count++;
        }
        let myLetters = new Letters(letter);
        myLetters.append_letters(); // Removing used letters
        check = 1;
        console.log("Letters left: ", show_up_alphabet);
        }
}

checking_inputs();

// // Remove button when clicked
// function removeButton() {
//   var buttonLetter = document.getElementById("hideButton");
//   buttonLetter.remove();
// }

console.log("Game finished!");