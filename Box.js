'use strict';

const utils = require("./utils.js");
require("reduce");

class Box {
    
    constructor(maxSize, packets) {
        this.maxSize = maxSize;
        this.packets = packets;
        this.totalWeight = packets.reduce(utils.add, 0);
    }

    tryToAdd(packet) {
        if(this.totalWeight == this.maxSize) {
            return false;
        } else if (this.totalWeight + parseInt(packet) <= this.maxSize) {
            this.packets.push(packet);
            this.totalWeight += parseInt(packet);
            return true;
        } else {
            return false;
        }
    }
    
    getPackets() {
        return this.packets;
    }
}

module.exports = Box;