class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        let stackIdx = 0;
        for (let i = 0; i < operations.length; ++i) {
            if (!isNaN(parseInt(operations[i]))) {
                stack.push(parseInt(operations[i]));
                stackIdx++;
            } else {
                if (operations[i] === "+") {
                    stack.push(stack[stackIdx - 1] + stack[stackIdx - 2]);
                    stackIdx++;
                } else if (operations[i] === "D") {
                    stack.push(stack[stackIdx - 1] * 2);
                    stackIdx++;
                } else {
                    stack.pop();
                    stackIdx--;
                }
            }
        }

        return stack.length > 0 ? stack.reduce((a, b) => a + b) : 0;
    }
}
