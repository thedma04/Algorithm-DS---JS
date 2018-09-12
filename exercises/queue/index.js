// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

/* eslint-disable */

class Queue {
	constructor() {
		this.data = [];
	}

	// Add record to the data
	add(record) {
		this.data.unshift(record);
	}

	remove() {
		return this.data.pop();
	}
}

let p = new Queue();
module.exports = Queue;
