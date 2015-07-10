var container = document.getElementsByClassName('container');
var containerArray = container[0].childNodes
var counterArray = [];
var xArray = [];
var oArray = [];
// var winningArray = [
//   ['one', 'two', 'three'],
//   ['one', 'four', 'seven'],
//   ['two', 'five', 'eight'],
//   ['three', 'six', 'nine'],
//   ['four', 'five', 'six'],
//   ['seven', 'eight', 'nine'],
//   ['one', 'five', 'nine'],
//   ['three', 'five', 'seven']
// ]
var gameState = [
  ['one', 'two', 'three'],
  ['four', 'five', 'six'],
  ['seven', 'eight', 'nine']
]



var winCheck = function (inputArray) {

  for (var i = 0; i < inputArray.length; i++) {
    var inputString = inputArray[i].join(',');
    if (inputString === 'x,x,x' || inputString === 'o,o,o') {
      alert('You Win!');
    };

    var newArray = [[], [], []];
    for (var j = 0; j < inputArray[i].length; j++) {
      newArray[j].push(inputArray[i][j]);
      var verticalString = newArray[j].join(',');
      if (verticalString === 'x,x,x' || verticalString === 'o,o,o') {
        alert('You Win!');
      };
    };
  }
  var anotherArray = [];
  for (var k = 0; k < inputArray.length; k++) {
    anotherArray.push(inputArray[k][k]);
    var diagonalString = anotherArray.join(',');
    if (diagonalString === 'x,x,x' || diagonalString === 'o,o,o') {
      alert('You Win!');
    };
  }

  var diagonalArray = [];
  //for (var k = inputArray.length - 1; k >= 0; k--) {
    diagonalArray.push(inputArray[0][2]);
    diagonalArray.push(inputArray[1][1]);
    diagonalArray.push(inputArray[2][0]);
    // console.log(inputArray[i][k]);
    // diagonalArray.push(inputArray[i][k]);
    //}
    var anotherString = diagonalArray.join(',');
    if (anotherString === 'x,x,x' || anotherString === 'o,o,o') {
      alert('You Win!')
    }
}

for (var i = 0; i < containerArray.length; i++) {
  containerArray[i].addEventListener('click', function(){
    counterArray.push(this.id);
    // console.log(counterArray);
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
    //run funk
    winCheck(gameState);
  });
};
//array
