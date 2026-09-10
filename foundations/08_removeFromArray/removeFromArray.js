let arr = [1, 2, 3, 4];
const removeFromArray = function(arr, ...theArgs) {
    for(let i =0; i<theArgs.length; i++){
        //if i is found in arr we have to remove it- for every i found
        const index = arr.indexOf(theArgs[i]);
        for (let j=0; j< arr.length; j++){
            const index = arr.indexOf(theArgs[i]);
            if (index !== -1) { 
            //find each one of this index so filter

            // 2. Remove it if found (1 means remove exactly 1 item)
            arr.splice(index, 1); 
        }
        }
        
    
    }return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
