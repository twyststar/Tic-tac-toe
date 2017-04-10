//business logic
function Player(name,token, numbers) {
  this.name = name;
  this.token = token;
  this.numbers = numbers;
}
xPlayer = new Player("x", "X", []);
oPlayer = new Player("o", "O", []);

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
    $("#sq" + sqVal).addClass("xSquare");
    rowWinnerCheck(xPlayer);
    colWinnerCheck(xPlayer);
    diagWinnerCheck(xPlayer);

  } else {
    oPlayer.numbers.push(sqVal);
    oLength += 1;
    $("#sq" + sqVal).addClass("oSquare");
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
        alert(Player.name + " you win!");
        $("td button").hide();
        $(".clickable").removeClass();
        $("td").addClass(Player.name + "Square");
        return win;
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
        alert(Player.name + " you win!");
        $("td button").hide();
        $(".clickable").removeClass();
        $("td").addClass(Player.name + "Square");
        return win;
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
          alert(Player.name + " you win!");
          $("td button").hide();
          $(".clickable").removeClass();
          $("td").addClass(Player.name + "Square");
          return win;
        }
      }
    }
  }
  tieTest();
}
tieTest = function(Player){
  if (xPlayer.numbers.length + oPlayer.numbers.length === 9){
    alert("It's a tie!");
  }
}
//UI logic
$(document).ready(function(){
  $("td button").click(function(){
    event.preventDefault();
    sqVal = parseInt($(this).val());
    $(this).hide();
    assignSquare();


  });
  $("#refresh").click(function(){
    event.preventDefault();
    location.reload();
  });
});
