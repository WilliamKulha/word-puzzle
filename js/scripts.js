//Back-end logic

let slider = function(show, hide) {
  $(show).slideDown();
  $(hide).slideUp();
};

//Define custom function to replace characters with dashes and push the result to the puzzletext div before joining it and printing it.
let replaceVowels = function(string) {
  let stringAsArray = [];
  for (let index = 0; index < string.length; index += 1) {
    let currentCharacter = string[index];
    if (currentCharacter === 'a' || currentCharacter === 'e' || currentCharacter === 'i' || currentCharacter === 'o' || currentCharacter === 'u') {
      stringAsArray[index] = '-';
    } else {
      stringAsArray[index] = currentCharacter;
    } if (index === string.length-1) {
        let finalPuzzle = stringAsArray.join('');
        $('#puzzleText').text(finalPuzzle);
    }
  };
};

//Front-end logic
$(document).ready(function() {
  $('#inputForm').submit(function(event) {
    event.preventDefault();
    replaceVowels($('#userInput').val());
    slider('#displayPuzzle', '#inputForm');
  });
  $('#startOver').click(function(event) {
    event.preventDefault();
    slider('#inputForm', '#displayPuzzle')
  })
});
