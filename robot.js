"use strict";

const prompt = require('prompt');
const robots = require("./robotFunctions.js");
const utils = require("./utils.js");
let packets = "163841689525773";
let maxWeight = 10;

prompt.start();
prompt.get(['articles','tailleCarton'], function (err, result) {
    packets = result.articles ? result.articles : packets;
    maxWeight = result.tailleCarton ? result.tailleCarton : maxWeight;
    utils.controlInputs(packets,maxWeight);
    console.log("Taille carton : " + maxWeight);
    console.log("Articles : " + packets);
    robots.dumbRobot (packets,maxWeight);
    robots.gluttonRobot (packets,maxWeight);
    process.exit();
});

