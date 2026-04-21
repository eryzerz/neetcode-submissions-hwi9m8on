class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsMap = new Map();

        for (let i = 0; i < nums.length; ++i) {
            if (numsMap.get(nums[i])) {
                return true;
            };
            numsMap.set(nums[i], 1);
        };

        return false;
    }
}
