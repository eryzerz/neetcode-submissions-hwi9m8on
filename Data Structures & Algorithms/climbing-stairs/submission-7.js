class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = new Map();
        const climb = (i) => {
            
            if (cache.has(i)) {
                return cache.get(i);
            }
            
            if (i >= n) {
                if (i === n) {
                    return 1;
                }
                return 0;
            };

            let res = climb(i + 1) + climb(i + 2);
            cache.set(i, res);
            return res;
        };

        return climb(0);
    }
}
