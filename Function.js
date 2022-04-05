function move(i, obj, index) {
    if(i > 0 && obj.get(index-1).number === 16) {
        moveLeft(i, obj);
    } else if(i < 15 && obj.get(index+1).number === 16) {
        moveRight(i, obj);
    } else if(i > 3 && obj.get(index-4).number === 16) {
        moveUp(i, obj);
    } else if(i < 12 && obj.get(index+4).number === 16) {
        moveDown(i, obj);
    }
}

function moveLeft(i, obj) {
    obj.move(i, i-1, 1);
}
function moveRight(i, obj) {
    obj.move(i, i+1, 1)
}
function moveUp(i, obj) {
    obj.move(i, i-4, 1)
    obj.move(i-3,i,1)
}
function moveDown(i, obj) {
    obj.move(i, i+4, 1)
    obj.move(i+3,i,1)
}
function checkWin(obj) {
    for (var n = 0; n < 15; n++) {
        if (obj.get(n).number > obj.get(n+1).number) {
            return false;
        }
    }
    return true;
}

function mixNumbers (obj) {
    var i = 0, j = 0, temp = null
    for (i = 15; i >= 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = obj.get(i).number
      obj.get(i).number = obj.get(j).number
      obj.get(j).number = temp
    }
}


function checkLoss(obj) {
    var sum = 0;
    var nullNumber;
    for (var n = 0; n < 15; n++) {
        if (obj.get(n).number > obj.get(n+1).number) {
            sum++;
        }
        if (obj.get(n).number === 16) nullNumber = n;
    }
    var loss = sum + nullNumber/4
    return loss%2;
}
