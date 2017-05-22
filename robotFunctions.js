"use strict";

const utils = require("./utils.js");
const Box = require("./Box.js");

/**
 * Dumb robot Phil. He fills boxes with packets not the smartest way
 * @param packets
 * @param maxWeight
 */
function dumbRobot (packets,maxWeight) {

    let boxes = [];

    let packetsArray = Array.from(packets);
    
    let currentBox = -1;
    packetsArray.forEach(currentPacket => {
        
        //enough place in the current box ?
        if (boxes.length == 0 || !boxes[currentBox].canAdd(currentPacket)) {
            //no place anymore, open a new box !
            let newBox = new Box(maxWeight);
            newBox.add(currentPacket);
            boxes.push(newBox);
            currentBox++;
        } else {
            boxes[currentBox].add(currentPacket)
        }

    });

    console.log(utils.printBoxes(boxes,"Dumb robot"));

};

/**
 * Glutton robot Phil. He fills boxes with packets in a glutton way
 * @param packets
 * @param maxWeight
 */
function gluttonRobot (packets,maxWeight) {

    let boxes = [];
    
    let packetsArray = utils.orderByDecreasingWeight(packets);
    
    packetsArray.forEach(currentPacket => {

        let currentBox = 0;
        //trying to fill in one of the boxes
        while (currentBox <= boxes.length) {

            //enough place in the current box ?
            if (currentBox < boxes.length && boxes[currentBox].canAdd(currentPacket)) {
                boxes[currentBox].add(currentPacket);
                break;
            } else if (currentBox == boxes.length) {
                //no place anymore, open a new box !
                let newBox = new Box(maxWeight);
                newBox.add(currentPacket);
                boxes.push(newBox);
                //we resort boxes, trying to optimise empty boxes
                boxes.sort(utils.compareBoxes);
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