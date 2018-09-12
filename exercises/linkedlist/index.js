// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = nul) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let node = this.head;
		let counter = 0;

		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}
}

module.exports = { Node, LinkedList };
