"use strict";

var twoSum = function (nums, target) {
  let correct = 0;
  while (correct < 2) {
    for (let a = 0; a < nums.length; a++) {
      let first = nums[a];
      for (let b = 0; b < nums.length; b++) {
        let second = nums[b];
        if (nums.indexOf(first) === nums.indexOf(second)) {
          continue;
        }
        let sum = first + second;
        if (sum === target) {
          console.log(`[${nums.indexOf(first)}, ${nums.indexOf(second)}]`);
          correct++;
        }
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);
