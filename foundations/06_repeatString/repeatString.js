const repeatString = function(str, times) {
    if (times < 0) return "ERROR"; //the only thing that i took 
    let string= "";
    for(let i =0; i < times; i ++){
        string +=str;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
