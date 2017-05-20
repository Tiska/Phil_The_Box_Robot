"use strict";

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function printBoxes(boxes) {
    let str = '';
    boxes.forEach(function (box) {
        box.forEach(function (packet) {
            str += packet.toString();
        });
        str += '/';
    });
    return str;
}

module.exports = {
    add: add,
    printBoxes: printBoxes
};