"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var markup2mir_1 = require("./markup2mir");
exports.markup2mir = markup2mir_1.markup2mir;
var radon_1 = require("./radon");
exports.Radon = radon_1.Radon;
var mir2markup_1 = require("./mir2markup");
exports.mir2markup = mir2markup_1.mir2markup;
exports.default = {
    Radon: radon_1.Radon,
    markup2mir: markup2mir_1.markup2mir,
    mir2markup: mir2markup_1.mir2markup,
};
var dr = {
    name: '',
    description: '',
    radRequest: {
        timelock: 0,
        retrieve: [
            {
                url: '',
                kind: 'HTTP-GET',
                script: [0x45],
            },
        ],
        aggregate: [0x50],
        tally: [0x50],
    },
};
var result = new radon_1.Radon(dr);
console.log(result.getMarkup());
