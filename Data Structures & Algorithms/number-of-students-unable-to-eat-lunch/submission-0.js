class LunchQueue {
    constructor(array) {
        this.array = array;
        this.length = array.length;
    };

    dequeue() {
        if (this.array.length === 0) {
            return [];
        };

        delete this.array[0];
        this.shift();
        this.array.length -= 1;
        this.length -= 1;
        return this.array;
    }

    shift() {
        let front = this.array[0];
        for (let i = 1; i < this.array.length; ++i) {
            let temp = this.array[i];
            this.array[i - 1] = temp;
            this.array[i] = front;
        }

        return this.array;
    }


}

class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let studentsQueue = new LunchQueue(students);
        let sandwichesQueue = new LunchQueue(sandwiches);

        let iter = 0;
        while (studentsQueue.length > 0) {
            if (iter >= studentsQueue.length) {
                break;
            };
            
            if (studentsQueue.array[0] === sandwichesQueue.array[0]) {
                iter = 0;
                studentsQueue.dequeue();
                sandwichesQueue.dequeue();
            } else {
                iter += 1;
                studentsQueue.shift();
            };
        };

        return studentsQueue.length;
    }
}
