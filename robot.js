"use strict";

const robots = require("./robotFunctions.js");
const packets = "163841689525773";
const maxBoxSize = 10;

robots.dumbRobot (packets,maxBoxSize);
robots.gluttonRobot (packets,maxBoxSize);