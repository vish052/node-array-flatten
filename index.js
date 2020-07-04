var finalArray = new Array();
exports.flatten = function(val) {
    if(val.constructor === Array) {
        for(var i=0; i<val.length; i++){
            if(val[i]){
                if(val[i].constructor === Array) {
                    flatten(val[i]);
                } else {
                    finalArray.push(val[i]);
                }
            }
        }
        return finalArray;
    } else {
        throw 'Invalid type'
    }
};
