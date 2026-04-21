class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const idxMap = new Map();
        const ans = new Set();
        for (let i = 0; i < nums.length; ++i) {
            idxMap.set(nums[i], i);
        }

        for (let i = 0; i < nums.length; ++i) {
            const diff = target - nums[i];
            if (idxMap.get(diff) !== undefined && idxMap.get(diff) != i) {
                ans.add(i);
                ans.add(idxMap.get(diff));
            }
        }
        return Array.from(ans);
    }
}
