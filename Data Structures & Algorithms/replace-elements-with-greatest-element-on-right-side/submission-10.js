class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1;
        let temp = 0;
        for (let i = arr.length - 1; i >= 0; --i) {
            temp = arr[i];
            arr[i] = rightMax;
            rightMax = Math.max(rightMax, temp);
        }
        return arr;
    }
}
