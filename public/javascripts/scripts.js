var container = document.getElementsByClassName('container');
var containerArray = container[0].childNodes
var counterArray = [];
var xArray = [];
var oArray = [];

var gameState = [
  ['one', 'two', 'three'],
  ['four', 'five', 'six'],
  ['seven', 'eight', 'nine']
]

var winCheck = function (inputArray) {

  var newArray = [[], [], []];
  for (var i = 0; i < inputArray.length; i++) {
    var inputString = inputArray[i].join(',');
    if (inputString === 'x,x,x' || inputString === 'o,o,o') {
      youWin();
    };

    for (var j = 0; j < inputArray[i].length; j++) {
      newArray[j].push(inputArray[i][j]);
      var verticalString = newArray[j].join(',');
      if (verticalString === 'x,x,x' || verticalString === 'o,o,o') {
        youWin()
      };
    };
  }
  var anotherArray = [];
  for (var k = 0; k < inputArray.length; k++) {
    anotherArray.push(inputArray[k][k]);
    var diagonalString = anotherArray.join(',');
    if (diagonalString === 'x,x,x' || diagonalString === 'o,o,o') {
      youWin();
    };
  }

  var diagonalArray = [];
  diagonalArray.push(inputArray[0][2]);
  diagonalArray.push(inputArray[1][1]);
  diagonalArray.push(inputArray[2][0]);
  var anotherString = diagonalArray.join(',');
  if (anotherString === 'x,x,x' || anotherString === 'o,o,o') {
    youWin();
  }
};

var youWin = function(){
  alert('You Win!');
  resetGame();
};

var tieGame = function(){
  alert('Tie Game!');
  resetGame();
};

var resetGame = function(){
  var counterArray = [];
  var xArray = [];
  var oArray = [];
  var gameState = [
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine']
  ];

  for (var i = 0; i < containerArray.length; i++) {
    containerArray[i].removeChild(containerArray[i].childNodes[0]);
    var image = document.createElement('img');
    containerArray[i].appendChild(image);
  };
};

for (var i = 0; i < containerArray.length; i++) {
  containerArray[i].addEventListener('click', function(){
    counterArray.push(this.id);
    if(counterArray.length % 2 != 0){
      for (var k = 0; k < gameState.length; k++) {
        for (var j = 0; j < gameState[k].length; j++) {
          if (this.id === gameState[k][j]) {
            gameState[k][j] = 'x';
          }
        }
      }
      if(this.firstChild.src){
        counterArray.pop()
      } else{
        xArray.push(this.id);
        this.firstChild.src = '../images/giant-x.jpg';
      }
    } else {
      for (var k = 0; k < gameState.length; k++) {
        for (var j = 0; j < gameState[k].length; j++) {
          if (this.id === gameState[k][j]) {
            gameState[k][j] = 'o';
          }
        }
      }
      if(this.firstChild.src){
        counterArray.pop()
      } else{
        oArray.push(this.id);
        this.firstChild.src = '../images/giant-o.gif';
      }
    }
    if(counterArray.length >= 9){
      var winner = winCheck(gameState)
      if(winner){
        winCheck(gameState)
      } else {
        tieGame();
      }
    }
    winCheck(gameState);
  });
};
