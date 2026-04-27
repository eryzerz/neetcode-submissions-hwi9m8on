class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let max = 0;

        for (let num of nums) {
            if (count === 0) {
                max = num;
            }
            if (num === max) {
                count += 1;
            } else {
                count -= 1;
            }
        }

        return max;
    }
}
