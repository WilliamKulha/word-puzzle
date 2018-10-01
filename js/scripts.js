//Back-end logic

//Define custom function to gather user input and make it into an array.
let gatherInput = function(userInput) {
  return userInput.split(" ");
};

//Define a custom function that looks through the indices of an array for vowels and replaces them with dashes.
let makeThePuzzle = function(inputString) {
  let inputArray = gatherInput(inputString)
  console.log(inputArray)
}


//Front-end logic

$(document).ready(function() {
  $('#inputForm').submit(function(event) {
    event.preventDefault();
    makeThePuzzle($('#userInput').val());
  })
})
