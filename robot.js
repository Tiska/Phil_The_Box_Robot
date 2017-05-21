"use strict";

const prompt = require('prompt');
const robots = require("./robotFunctions.js");
let packets = "163841689525773";
let maxBoxSize = 10;

prompt.start();
prompt.get(['articles','tailleCarton'], function (err, result) {
    packets = result.articles ? result.articles : packets;
    maxBoxSize = result.tailleCarton ? result.tailleCarton : maxBoxSize;
    console.log("Taille carton : " + maxBoxSize);
    console.log("Articles : " + packets);
    robots.dumbRobot (packets,maxBoxSize);
    robots.gluttonRobot (packets,maxBoxSize);
    process.exit();
});

