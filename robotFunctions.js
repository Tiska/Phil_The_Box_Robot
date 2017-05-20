"use strict";

const utils = require("./utils.js");
require("reduce");

/**
 * Dumb robot Phil. He fills boxes with packets not the smartest way
 * @param packets
 * @param maxBoxSize
 */
function dumbRobot (packets,maxBoxSize) {

    let boxes = [];

    let packetsArray = Array.from(packets);

    let currentPacket = 0;
    let currentBox = -1;
    while (currentPacket < packetsArray.length) {

        //enought place in the current box ?
        if (boxes.length > 0 && parseInt(packetsArray[currentPacket]) + boxes[currentBox].reduce(utils.add, 0) <= maxBoxSize) {
            boxes[currentBox].push(packetsArray[currentPacket]);

        } else {
            //no place anymore, open a new box !
            boxes.push([packetsArray[currentPacket]]);
            currentBox++;
        }
        currentPacket++;

    };

    console.log(utils.printBoxes(boxes,"Dumb robot"));

};

/**
 * Glutton robot Phil. He fills boxes with packets in a glutton way
 * @param packets
 * @param maxBoxSize
 */
function gluttonRobot (packets,maxBoxSize) {

    let boxes = [];

    //order by highest numbers
    let packetsArray = Array.from(packets).sort().reverse();

    let currentPacket = 0;
    while (currentPacket < packetsArray.length) {

        let currentBox = 0;
        //trying to fill in one of the boxes
        while (currentBox <= boxes.length) {

            //enought place in the current box ?
            if (currentBox < boxes.length && parseInt(packetsArray[currentPacket]) + boxes[currentBox].reduce(utils.add, 0) <= maxBoxSize) {
                boxes[currentBox].push(packetsArray[currentPacket]);
                break;

            } else if (currentBox == boxes.length) {
                //no place anymore, open a new box !
                boxes.push([packetsArray[currentPacket]]);
                break;
            }
            currentBox++;

        };

        currentPacket++;

    };

    console.log(utils.printBoxes(boxes,"Glutton robot"));

};

module.exports = {
    dumbRobot: dumbRobot,
    gluttonRobot: gluttonRobot
};