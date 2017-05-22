'use strict';

const expect = require("chai").expect;
const utils = require('./utils');
const Box = require('./Box');

describe('Test box methods', function() {
    
    it('should return false when trying to add to a full box', function() {
        let box = new Box(10);
        box.add(5);
        expect(box.canAdd(6)).to.be.false;
    });

    it('should return true when trying to add to a empty box', function() {
        let box = new Box(10);
        expect(box.canAdd(10)).to.be.true;
    });

    it('should return false when trying to add more than the max size', function() {
        let box = new Box(10);
        expect(box.canAdd(11)).to.be.false;
    });

});