import QtQuick 2.15
import QtQuick.Window 2.15
import QtQuick.Controls 2.15
import "Function.js" as Func

Window {
    id: root
    width: 540
    height: 480
    visible: true
    title: qsTr("Fifteen")

    Rectangle {
        id: wraper
        height: parent.height - parent.height/5
        width: height
        anchors.horizontalCenter: parent.horizontalCenter
        color: "#33ffbc"
        border.color: Qt.lighter(color)
        GridView {
            id: board
            anchors.fill: parent
            cellWidth: width/4
            cellHeight: cellWidth
            anchors.margins: 8
            model: theModel
            delegate: Square {
                visible: number === 16 ? false : true
                width: parent.height/4
                height: width
                text: number
                onSwap: {
                    if(indSwap > 0 && theModel.get(index-1).number === 16) {
                        Func.moveLeft(indSwap);
                    } else if(indSwap < 15 && theModel.get(index+1).number === 16) {
                        Func.moveRight(indSwap);
                    } else if(indSwap > 3 && theModel.get(index-4).number === 16) {
                        Func.moveUp(indSwap);
                    } else if(indSwap < 12 && theModel.get(index+4).number === 16) {
                        Func.moveDown(indSwap);
                    }
                    if(theModel.get(15).number === 16) {
                        if(Func.checkWin()) {
                            win.visible = true
                        }
                    }
                }
            }

            move: Transition {
                NumberAnimation { properties: "x,y"; duration: 500 }
            }
        }
        Text {
            id: win
            text: "WIN"
            anchors.centerIn: parent
            font.pixelSize: parent.height/2
            color: "blue"
            visible: false
        }
    }

    Fifteen{
        id: theModel
    }

    Button {
        id: mix
        width: parent.width/5
        height: width/2
        text: "MIX"
        font.pixelSize: height/2
        anchors.top: wraper.bottom
        anchors.horizontalCenter: parent.horizontalCenter
        onClicked: {
            Func.mixNumbers();
            while(Func.checkLoss()) {
                Func.mixNumbers();
                console.log("mix")
            }
            win.visible = false
        }
        background: Rectangle {
            anchors.horizontalCenter: parent.horizontalCenter
            width: parent.width
            height: parent.height
            color: "#008020"
            radius: 5
        }
    }
}

