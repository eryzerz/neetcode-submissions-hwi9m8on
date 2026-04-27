class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const numsMap = new Map();
        let max = nums[0];
        for (let i = 0; i < nums.length; ++i) {
            numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1);
            if (max !== nums[i] && numsMap.get(nums[i]) > numsMap.get(max)) {
                max = nums[i];
            }
        };

        return max;
    }
}
