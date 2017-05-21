"use strict";

function add(a, b) {
    return parseInt(a) + parseInt(b);
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

module.exports = {
    add,
    printBoxes,
    orderByDecreasingWeight
};