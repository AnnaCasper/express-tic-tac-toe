var container = document.getElementsByClassName('container');
var containerArray = container[0].childNodes
var counterArray = [];
var xArray = [];
var oArray = [];
var gameState = [
  ['one', 'two', 'three'],
  ['four', 'five', 'six'],
  ['seven', 'eight', 'nine']
];

var youWin = function () {
  if (confirm('You Win! Click "OK" to reset game')) {
    console.log('do something in here to reset game');
  }
}

var winCheck = function (inputArray) {
  var newArray = [[], [], []];
  //check all horizontals
  for (var i = 0; i < inputArray.length; i++) {
    var inputString = inputArray[i].join(',');
    if (inputString === 'x,x,x' || inputString === 'o,o,o') {
      youWin();
    }
    //check all verticalls...currently broken
    for (var j = 0; j < inputArray[i].length; j++) {
      newArray[j].push(inputArray[i][j]);
      var verticalString = newArray[j].join(',');
      if (verticalString === 'x,x,x' || verticalString === 'o,o,o') {
        youWin();
      }
    }
  }
  //check left to right diagonal
  var anotherArray = [];
  for (var k = 0; k < inputArray.length; k++) {
    anotherArray.push(inputArray[k][k]);
    var diagonalString = anotherArray.join(',');
    if (diagonalString === 'x,x,x' || diagonalString === 'o,o,o') {
      youWin();
    }
  }
  //check right to left diagonal
  var diagonalArray = [];
  //hard coded, couldn't get for loop to work
  diagonalArray.push(inputArray[0][2]);
  diagonalArray.push(inputArray[1][1]);
  diagonalArray.push(inputArray[2][0]);
  var anotherString = diagonalArray.join(',');
  if (anotherString === 'x,x,x' || anotherString === 'o,o,o') {
    youWin();
  }
}

for (var i = 0; i < containerArray.length; i++) {
  containerArray[i].addEventListener('click', function(){
    counterArray.push(this.id);
    //if number is even, it's x's turn, push that into the gameState array
    if(counterArray.length % 2 != 0){
      for (var k = 0; k < gameState.length; k++) {
        for (var j = 0; j < gameState[k].length; j++) {
          if (this.id === gameState[k][j]) {
            gameState[k][j] = 'x';
          }
        }
      }
      xArray.push(this.id);
      this.firstChild.src = '../images/giant-x.jpg';
    } else {
      for (var k = 0; k < gameState.length; k++) {
        for (var j = 0; j < gameState[k].length; j++) {
          if (this.id === gameState[k][j]) {
            gameState[k][j] = 'o';
          }
        }
      }
      oArray.push(this.id);
      this.firstChild.src = '../images/giant-o.gif';
    }
    winCheck(gameState);
  });
};
