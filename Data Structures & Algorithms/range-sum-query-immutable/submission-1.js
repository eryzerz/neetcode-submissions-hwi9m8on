class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = [0];
        let total = 0;
        for (let num of nums) {
            total += num;
            this.prefix.push(total);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.prefix[right + 1] - this.prefix[left];
    }
}
