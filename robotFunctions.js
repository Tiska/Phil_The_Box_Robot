"use strict";

const utils = require("./utils.js");
const Box = require("./Box.js");

/**
 * Dumb robot Phil. He fills boxes with packets not the smartest way
 * @param packets
 * @param maxBoxSize
 */
function dumbRobot (packets,maxBoxSize) {

    let boxes = [];

    let packetsArray = Array.from(packets);
    
    let currentBox = -1;
    packetsArray.forEach(function (currentPacket) {
        
        //enought place in the current box ?
        if (!(boxes.length > 0 && boxes[currentBox].tryToAdd(currentPacket))) {
            //no place anymore, open a new box !
            let newBox = new Box(maxBoxSize,[currentPacket]);
            boxes.push(newBox);
            currentBox++;
        }

    });

    console.log(utils.printBoxes(boxes,"Dumb robot"));

};

/**
 * Glutton robot Phil. He fills boxes with packets in a glutton way
 * @param packets
 * @param maxBoxSize
 */
function gluttonRobot (packets,maxBoxSize) {

    let boxes = [];
    
    let packetsArray = utils.orderByDecreasingWeight(packets);
    
    packetsArray.forEach(function (currentPacket) {

        let currentBox = 0;
        //trying to fill in one of the boxes
        while (currentBox <= boxes.length) {

            //enought place in the current box ?
            if (currentBox < boxes.length && boxes[currentBox].tryToAdd(currentPacket)) {
                break;
            } else if (currentBox == boxes.length) {
                //no place anymore, open a new box !
                let newBox = new Box(maxBoxSize,[currentPacket]);
                boxes.push(newBox);
                break;
            }
            currentBox++;

        };

    });

    console.log(utils.printBoxes(boxes,"Glutton robot"));

};

module.exports = {
    dumbRobot,
    gluttonRobot
};