function moveLeft(i) {
    theModel.move(i, i-1, 1);
}
function moveRight(i) {
    theModel.move(i, i+1, 1)
}
function moveUp(i) {
    theModel.move(i, i-4, 1)
    theModel.move(i-3,i,1)
}
function moveDown(i) {
    theModel.move(i, i+4, 1)
    theModel.move(i+3,i,1)
}
function checkWin() {
    for (var n = 0; n < 15; n++) {
        if (theModel.get(n).number > theModel.get(n+1).number) {
            return false;
        }
    }
    return true;
}

function mixNumbers () {
    //var array = [];
    //for (var k = 1; k < 17; k++)  {theModel.get(k).number = k}
    var i = 0, j = 0, temp = null
    for (i = 16; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = theModel.get(i).number
      theModel.get(i).number = theModel.get(j).number
      theModel.get(j).number = temp
    }
    for (var l = 0; l < 16; l++)  {
        theModel.get(l).number = array[l];
    }
}

function checkLoss() {
    console.log("checkLoss")
    var sum = 0;
    var nullNumber;
    for (var n = 0; n < 15; n++) {
        if (theModel.get(n).number > theModel.get(n+1).number) {
            sum++;
        }
        if (theModel.get(n).number === 16) nullNumber = n;
    }
    var loss = sum + nullNumber/4
    //if (loss%2) {
        return loss%2;//true;
    //} else return false;
}
