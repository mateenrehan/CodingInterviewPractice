/**
  * Created by Mateenrehan Shaikh on 1/28/18.
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
 var twoSum = function(nums, target) {
     var answer = [];                                   // For storing answer i.e. the indices of array
     for (var i=0; i<nums.length; i++) {                // Outer loop staring from 1st element
         for (var j=i+1; j<nums.length;j++) {           // Inner loop starting from i+1 element
             if (nums[i] + nums[j] == target) {         // Check if the sum of values at i and j is equal to target
                 answer.push(i);                        // Add i in the answers array
                 answer.push(j);                        // Add j in the answers array
             }
         }
     }
     return answer;                                     //Return answer array with i and j values

 };
