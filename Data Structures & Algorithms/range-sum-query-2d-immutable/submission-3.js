class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.prefix = [new Array(matrix[0].length + 1).fill(0)];

        for (let i = 1; i < matrix.length + 1; ++i) {
            let arr = [0];
            for (let j = 1; j < matrix[i - 1].length + 1; ++j) {
                const intersection = this.prefix[i - 1][j - 1];
                const top = this.prefix[i - 1][j];
                const left = arr[j - 1];
                const total = top + left - intersection + matrix[i - 1][j - 1];          
                arr.push(total);
            }
            this.prefix.push(arr);
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++;
        col1++;
        row2++;
        col2++;
        const topLeft = this.prefix[row1 - 1][ col1 - 1];
        const topRight = this.prefix[row1 - 1][col2];
        const bottomRight = this.prefix[row2][col2];
        const bottomLeft = this.prefix[row2][col1 - 1];
        const result = bottomRight - topRight - bottomLeft + topLeft;
        return result;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
