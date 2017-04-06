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
  } else {
    oPlayer.numbers.push(sqVal);
    oLength += 1;
  }
  console.log(xPlayer.numbers + "  Xplay")
  console.log(oPlayer.numbers + "  Oplay")
  console.log(xNumbers);
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
