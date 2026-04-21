class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const ans = new Set();

        // let j = 0
        for (let i = 0; i < nums.length; ++i) {
            for (let j = i + 1; j < nums.length; ++j) {
                if (nums[i] + nums[j] === target) {
                    ans.add(i);
                    ans.add(j);
                }
            }
        }

        return Array.from(ans);
    }
}
