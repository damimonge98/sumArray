 function sumArray (array, num) {
     for (var i = 0; i <array.length; i++) {
        for (var j = 0; j <array.length-1; j++) {
            if (array[i]+array[j] === num) {
                return true;
            }
        }
     }
     return false;

}   
 
 sumArray([2, 4, 5, 10,7] , 17);