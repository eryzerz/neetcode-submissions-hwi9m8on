class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        if (arr.length === 1) {
            return [-1];
        };

        let max = 0;
        let j = 0;
        let i = j - 1;

        for (let k = j + 1; k < arr.length; ++k) {
            if (arr[k] > arr[j]) {
                max = arr[k];
                arr[j] = max;
                arr[k] = -1;
                for (let i = 0; i < j; ++i) {
                    if (i >= 0 && arr[j] > arr[i]) {
                        arr[i] = max;
                    }
                }
            } else if (arr[k] === arr[j]) {
                arr[k] = -1;
                max = arr[j];
            } else {
                max = arr[j];
                arr[j] = arr[k];
                arr[k] = -1;
            }

            j += 1;
            i += 1;
        }
        return arr;
    }
}
