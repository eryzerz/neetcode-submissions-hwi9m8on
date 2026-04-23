class PrefixSum {
    constructor(nums) {
        this.prefixSum = [0];
        let total = 0;
        for (let num of nums) {
            total += num;
            this.prefixSum.push(total);
        }
    };

    sumRange(start, end) {
        start++;
        end++;
        return this.prefixSum[end] - this.prefixSum[start - 1];
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const prefixSum = new PrefixSum(nums);

        for (let j = 0; j < nums.length; ++j) {
            const left = prefixSum.sumRange(0, j);
            const right = prefixSum.sumRange(j, nums.length - 1);

            if (left === right) {
                return j;
            }
        }

        return -1;
    }
}
