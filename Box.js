'use strict';

const utils = require("./utils.js");

class Box {
    
    constructor(maxWeight) {
        this.maxWeight = maxWeight;
        this.packets = [];
        this.totalWeight = 0;
    }

    add(packet) {
        if(this.canAdd(packet)) {
            this.packets.push(packet);
            this.totalWeight += parseInt(packet);
        }
    }

    canAdd(packet) {
        if(this.totalWeight == this.maxWeight) {
            return false;
        } else if (this.totalWeight + parseInt(packet) <= this.maxWeight) {
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