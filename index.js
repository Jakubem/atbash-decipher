var input = document.querySelector('.input');
var output = document.querySelector('.output');
var btn = document.querySelector('.btn');

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ',', '.', ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var translatedLetters = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A', ',', '.', ' ', 'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']


document.body.addEventListener('keypress', function (ev) {
    if (ev.code === 'Enter') {
        translate();
    }
});

var translate = function () {
    output.textContent = '';
    for (var i = 0; i < input.value.length; i++) {
        var text = input.value;
        var textIndex = text.charAt(i);
        var lettersIndex = letters.indexOf(textIndex);
        var translation = translatedLetters[lettersIndex];
        output.textContent += translation;
    }
    input.value = '';
};

btn.addEventListener('click', translate);
