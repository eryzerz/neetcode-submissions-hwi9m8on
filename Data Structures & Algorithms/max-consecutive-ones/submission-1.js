class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        if (nums.length === 0) {
            return 0;
        }
        let occurences = [];
        let count = 0;
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] === 1) {
                count += 1;
                if (i === nums.length - 1 || nums[i + 1] !== 1) {
                    if (count > (occurences[occurences.length - 1] || 0)) {
                        occurences.push(count);
                    };
                }
            } else {
                if (count > (occurences[occurences.length - 1] || 0)) {
                    occurences.push(count);
                };
                count = 0
            }
        }
        return occurences[occurences.length - 1] || 0;
    }
}
