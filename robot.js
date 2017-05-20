"use strict";

const utils = require("./utils.js");
require("reduce");

const packets = "163841689525773";
const maxBoxSize = 10;

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
    
    console.log(utils.printBoxes(boxes));

};

dumbRobot (packets,maxBoxSize);