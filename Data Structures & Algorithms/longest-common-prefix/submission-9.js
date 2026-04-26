class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = "";

        for (let i = 0; i < strs[0].length; ++i) {
            let count = 0;
            for (let j = 0; j < strs.length; ++j) {
                let row = j === strs.length - 1 ? 0 : j + 1;
                if (strs[j][i] === strs[row][i]) {
                    count += 1;
                }
            }
            if (count === strs.length) {
                result += strs[0][i];
            } else {
                return result;
            }
        }

        return result;
    }
}
