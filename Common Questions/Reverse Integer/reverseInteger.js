/**
 * Created by Mateenrehan Shaikh on 1/28/18.
 */

 /**
  * @param {number} x
  * @return {number}
  */
 var reverse = function(x) {
     if (parseInt(x,10) < 2147483647) {                                     // Check whether its a 32 bit signed integer if not return 0
         var sign = Math.sign(x);                                          // Check the sign of the number
         if (sign == 0) {                                                 // if the number is 0 return 0
             return 0;
         }
         else if(sign == 1) {                                            // If the number is positive, go in this block
             var y = x.toString().split("").reverse().join("");          //convert it to string, reverse it and join the number
             var z = Number(y);                                          // Convert it to integer from string
             return z;
         }
         else {
             if (parseInt(x,10) > -2147483647){                          // Check whether its a 32 bit signed integer if not return 0
                 var y = x.toString().split("").reverse().join("");      //convert it to string, reverse it and join the number
                 var digits = y.substring(0,y.length-1);                // Extract numbers as in the above command
                 var z = Number(digits);                                // converts only the reversed number from string to int without sign
                 return -z;                                             // Adding the negative sign we know that all the answers will be negative here
             }
             else {
                 return 0;                                              // Return 0 if the number is less than -2147483647
             }
         }
     }
     else {
         return 0;                                                      // Return 0 if the number is greater than 2147483647
     }

 };
