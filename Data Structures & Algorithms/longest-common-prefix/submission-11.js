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
                if (strs[j][i] === (strs[j + 1] || strs[0])?.[i]) {
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
