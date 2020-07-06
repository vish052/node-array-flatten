"use strict";

var result = [];
var flatten = function(val) {
        if(val.constructor === Array) {
            for(var i=0; i<val.length; i++){
                if(val[i]){
                    if(val[i].constructor === Array) {
                        flatten(val[i]);
                    } else {
                        result.push(val[i]);
                    }
                }
            }
            return result;
        } else {
            throw new Error('Not an array!');
        }
};

module.exports = flatten;
