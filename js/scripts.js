//business logic
function Player(token, numbers) {
  this.token = token;
  this.numbers = numbers;
}
xPlayer = new Player("X", []);
oPlayer = new Player("O", []);

var winRow = [[1,2,3], [4,5,6], [7,8,9]];
var winCol= [[1,4,7], [2,5,8], [3,6,9]];
var winDiag = [[1,5,9], [3,5,7]];

var xNumbers = xPlayer.numbers.sort();
var oNumbers = oPlayer.numbers.sort();

var xLength = xNumbers.length;
var oLength = oNumbers.length;

assignSquare = function(param) {
  if (xLength === oLength) {
    xPlayer.numbers.push(sqVal);
    xLength += 1;
    rowWinnerCheck(xPlayer);
    colWinnerCheck(xPlayer);
    diagWinnerCheck(xPlayer);
  } else {
    oPlayer.numbers.push(sqVal);
    oLength += 1;
    rowWinnerCheck(oPlayer);
    colWinnerCheck(oPlayer);
    diagWinnerCheck(oPlayer);
  }
}
rowWinnerCheck = function (Player) {
  myLength = Player.numbers.length;
  myNumbers = Player.numbers;
  for(var i=0; i <= 2; i++) {
    var win = 0
    for(var j=0; j <=2; j++) {
      for(var k = 0; k < myLength; k++) {
      if (winRow[i][j] === myNumbers[k]) {
       win = win + 1;
      }
      if (win === 3){
        alert("you win");
      }
      }
    }
  }
}

colWinnerCheck = function (Player) {
  myLength = Player.numbers.length;
  myNumbers = Player.numbers;
  for(var i=0; i <= 2; i++) {
    var win = 0
    for(var j=0; j <=2; j++) {
      for(var k = 0; k < myLength; k++) {
      if (winCol[i][j] === myNumbers[k]) {
       win = win + 1;
      }
      if (win === 3){
        alert("you win");
      }
      }
    }
  }
}
diagWinnerCheck = function (Player) {
  myLength = Player.numbers.length;
  myNumbers = Player.numbers;
  for(var i=0; i <= 1; i++) {
    var win = 0
    for(var j=0; j <=2; j++) {
      for(var k = 0; k < myLength; k++) {
      if (winDiag[i][j] === myNumbers[k]) {
       win = win + 1;
      }
      if (win === 3){
        alert("you win");
      }
      }
    }
  }
}

//UI logic
$(document).ready(function(){
  $("button").click(function(){
    event.preventDefault();
    sqVal = parseInt($(this).val());
    $(this).hide();
    // XPlayer.numbers.push(sqVal);
    assignSquare();

    // console.log(XPlayer.numbers);

  });
});
