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

	size() {}
}

module.exports = { Node, LinkedList };
