"use strict";

function compareBoxes(a, b) {
    return a.totalWeight - b.totalWeight;
}

function printBoxes(boxes, robot) {
    let str = '';
    boxes.forEach(function (box, index) {
        box.getPackets().forEach(function (packet) {
            str += packet.toString();
        });
        str += index != boxes.length-1 ? '/' : '';
    });
    return  str + ' => ' + boxes.length + ' cartons utilisés par ' + robot;
}

function orderByDecreasingWeight(packets) {
    return  Array.from(packets).sort().reverse();
}

function controlInputs(packets,maxWeight) {
    if(Array.from(packets).sort().reverse()[0] > maxWeight){
        process.exit();
    }
}

module.exports = {
    controlInputs,
    printBoxes,
    orderByDecreasingWeight,
    compareBoxes
};