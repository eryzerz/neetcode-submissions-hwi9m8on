class MinStack {
    stack = [];
    minStack = [];
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack[0] = val;
            this.minStack[0] = val;
        } else {
            this.stack[this.stack.length] = val;
            if (val <= this.minStack[this.minStack.length - 1]) {
                this.minStack[this.minStack.length] = val;
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
            this.minStack.length--;
        }
        this.stack.length--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
