var input = document.querySelector('.input');
var output = document.querySelector('.output');
var btn = document.querySelector('.btn');

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ',', '.', ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var translatedLetters = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A', ',', '.', ' ', 'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']


document.body.addEventListener('keypress', function (ev) {
    if (ev.code === 'Enter') {
        btn.click();
    }
});

var translate = function () {
    output.textContent = '';
    for (var i = 0; i < input.value.length; i++) {
        var text = input.value;
        var textIndex = text.charAt(i);
        var lettersIndex = letters.indexOf(textIndex);
        var translation = translatedLetters[lettersIndex];
      if (typeof translation === 'undefined'){
        return;
      };
        output.textContent += translation;
    }
    input.value = '';
};


var translateWojt = function () {
    output.textContent = '';
    Array.from(input.value).forEach(function (char) {
        var translatedChar = mathSolution(char);
        
        if (!translatedChar) {
            output.textContent += char;
        } else {
            output.textContent += translatedChar;
        }
    });
    input.value = '';
};


var mathSolution = function (letter) {
    // y is the var we are looking for - translated one. Contains char number 
    // x is char number of letter
    // startNumber is the startting position - ex. 65 is a , 97 is A
    // alphabetLength is alphabet lenght
    var y = undefined;
    var x = letter.charCodeAt(0);
    var alphabetLength = 25;
    var startNumber = 97;
    
    if (!/[A-Za-z]/.test(letter)) {
        return undefined;
    }
    
    if (letter == letter.toUpperCase()) {
        startNumber = 65;
    }
    
//    console.log(`x: ${x}, y: ${y}, alphabetLength: ${alphabetLength}, startNumber: ${startNumber}`);
    y = x + alphabetLength - (x-startNumber) * 2; 
    
    return String.fromCharCode(y);
};

btn.addEventListener('click', translate);
