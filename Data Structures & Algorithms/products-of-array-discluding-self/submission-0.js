class PrefixProduct {
    constructor(nums) {
        this.prefixLeft = [1];
        this.prefixRight = [1];
        let product = nums[0];

        this.prefixRight.push(product);
        for (let i = 0; i < nums.length && i + 1 < nums.length; ++i) {
            product *= nums[i + 1]
            this.prefixRight.push(product);
        }

        product = nums[nums.length - 1];
        this.prefixLeft.push(product);
        for (let i = nums.length - 1; i > 0 && i - 1 >= 0; --i) {
            product *= nums[i - 1];
            this.prefixLeft.push(product)
        }
    }

    productLeft(index) {
        return this.prefixLeft[this.prefixLeft.length - 1 - index - 1];
    }

    productRight(index) {
        return this.prefixRight[index + 1 - 1];
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProduct = new PrefixProduct(nums);
        let result = [];
        for (let i = 0; i < nums.length; ++i) {
            result.push(prefixProduct.productLeft(i) * prefixProduct.productRight(i));
        }
        return result;
    }
}
