/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let answer =[];
    let res = 0;
    for(let i=0; i< nums.length; i++){
        res = target - nums[i];
        for(let j=i; j< nums.length; j++){
             if(res == nums[j] && j!=i){
                answer.push(j);
                answer.push(i);
                break;
             }
        }
    }
    return answer;
};
