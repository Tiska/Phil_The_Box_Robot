"use strict";

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function printBoxes(boxes, robot) {
    let str = '';
    boxes.forEach(function (box, index) {
        box.forEach(function (packet) {
            str += packet.toString();
        });
        str += index != boxes.length-1 ? '/' : '';
    });
    return  str + ' => ' + boxes.length + ' cartons utilisés par ' + robot;
}

function compareNumbers(a, b) {
    return parseInt(a) < parseInt(b);
}

module.exports = {
    add: add,
    printBoxes: printBoxes,
    compareNumbers: compareNumbers
};