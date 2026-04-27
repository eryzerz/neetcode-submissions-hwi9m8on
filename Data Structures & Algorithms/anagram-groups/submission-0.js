class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagramMap = new Map();
        let result = [];

        for (let i = 0; i < strs.length; ++i) {
            let a = strs[i].split("").sort().join("");
            anagramMap.set(a, !!anagramMap.get(a) ? anagramMap.get(a).concat([strs[i]]) : [strs[i]]);
        }

        for (let anagram of anagramMap.values()) {
            result.push(anagram);
        }

        return result;
    }
}
