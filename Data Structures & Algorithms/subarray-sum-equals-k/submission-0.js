class PrefixSum {
    constructor(nums) {
        this.prefix = [0];

        let total = 0;
        for (let i = 0; i < nums.length; ++i) {
            total += nums[i];
            this.prefix.push(total);
        }
    };

    rangeSum(start, end) {
         return this.prefix[end] - this.prefix[start];
    };
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const result = [];
        const prefixNums = new PrefixSum(nums);

        for (let i = 0; i < nums.length + 1; ++i) {
            for (let j = i + 1; j < nums.length + 1; ++j) {
                if (prefixNums.rangeSum(i, j) === k) {
                    if (j - i === 1) {
                        result.push([nums[j - 1]])
                    } else {
                        result.push(nums.slice(i, j));
                    }
                }
            }
        }

        return result.length;
    }
}
