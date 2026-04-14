class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        if (nums.length === 0) {
            return 0;
        }
        let maxCount = 0;
        let count = 0;
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] === 1) {
                count += 1;
                if (i === nums.length - 1 || nums[i + 1] !== 1) {
                    maxCount = Math.max(maxCount, count);
                }
            } else {
                maxCount = Math.max(maxCount, count);
                count = 0
            }
        }
        return maxCount;
    }
}
