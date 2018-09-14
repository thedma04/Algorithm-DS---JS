// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
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

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}

		let node = this.head;

		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
	}

	clear() {
		return (this.head = null);
	}

	removeFirst() {
		if (!this.head) return;
		return (this.head = this.head.next);
	}

	removeLast() {
		if (!this.head) return;

		if (!this.head.next) return (this.head = null);

		let previous = this.head;
		let node = this.head.next;

		while (node.next) {
			previous = node;
			node = node.next;
		}

		return (previous.next = null);
	}

	insertLast(data) {
		let last = this.getLast();

		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;

		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		return null;
	}

	removeAt(index) {
		/**Return if there is no data */
		if (!this.head) return;

		/**Remove when index is equal to zero */
		if (index === 0) return (this.head = this.head.next);

		/** Get the previous the index being removed */
		let previous = this.getAt(index - 1);
		if (!previous || !previous.next) return;
		previous.next = previous.next.next;
	}

	insertAt(data, index) {
		/** Insert record when there is no data */
		if (!this.head) return (this.head = new Node(data));

		/** Insert when there is data but index is 0 */
		if (index === 0) {
			return (this.head = new Node(data, this.head));
		}

		/** Insert a node at the middle */
		let previous = this.getAt(index - 1) || this.getLast();

		let node = new Node(data, previous.next);
		previous.next = node;
	}

	/** Creating a forEach function for generators */
	forEach(fn) {
		let counter = 0;
		let node = this.head;
		while (node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	/** Making use of for of in linkedlist using generator */
	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
