//business logic
function Player(name,token, numbers) {
  this.name = name;
  this.token = token;
  this.numbers = numbers;
}
xPlayer = new Player("Gir", "X", []);
oPlayer = new Player("Dib", "O", []);
cPlayer = new Player("Gir", "C", []);

var computerPlaying = false
var noWin = 0;

var winRow = [[1,2,3], [4,5,6], [7,8,9]];
var winCol= [[1,4,7], [2,5,8], [3,6,9]];
var winDiag = [[1,5,9], [3,5,7]];

var xNumbers = xPlayer.numbers.sort();
var oNumbers = oPlayer.numbers.sort();
var cNumbers = cPlayer.numbers.sort();

var xLength = xNumbers.length;
var oLength = oNumbers.length;
var cLength = cNumbers.length;

assignSquare = function(param) {

  if (xLength === oLength || computerPlaying === true) {
    xPlayer.numbers.push(sqVal);
    xLength += 1;
    $("#sq" + sqVal).addClass("ZimSquare");
    rowWinnerCheck(xPlayer);
    colWinnerCheck(xPlayer);
    diagWinnerCheck(xPlayer);
    if (computerPlaying === true && (cLength + xLength)< 9){
      computerTurn();
      rowWinnerCheck(cPlayer);
      colWinnerCheck(cPlayer);
      diagWinnerCheck(cPlayer);
    }

  } else {
    oPlayer.numbers.push(sqVal);
    oLength += 1;
    $("#sq" + sqVal).addClass("DibSquare");
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
        noWin += 1;
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
        noWin += 1;
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
          noWin += 1
          return win;
        }
      }
    }
  }
  tieTest();
}
tieTest = function(Player){
  if ((xPlayer.numbers.length + oPlayer.numbers.length === 9) && (noWin === 0)){
    alert("It's a tie!");
  } else if ((xPlayer.numbers.length + cPlayer.numbers.length === 9) && (noWin === 0)) {
    alert("It's a tie!");
    return
  }
}

var computerTurn = function() {
  var choice = Math.floor((Math.random() * 9) + 1);
  console.log(choice);
  if (xNumbers.includes(choice) || cNumbers.includes(choice)) {
  computerTurn();
  }else {
  cNumbers.push(choice);
  cLength += 1;
  $("#sq" + choice).addClass("GirSquare");
  $("." + choice).hide();
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
  $("#comp").click(function(){
    event.preventDefault();
    computerPlaying = true;
  });

  $("#refresh").click(function(){
    event.preventDefault();
    location.reload();
  });
});
