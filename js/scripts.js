//Back-end logic

//Define custom function to replace characters with dashes and push the result to the puzzletext div.
let replaceVowels = function(string) {
  console.log(string);
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
    $('#displayPuzzle').slideDown();
    $('#inputForm').slideUp();
  });
});
