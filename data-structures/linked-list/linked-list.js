class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        let newNode = new Node(value, this.head, null);

        if (this.head) {
            this.head.prev = newNode;
        }
        else {
            this.tail = newNode;
        }

        this.head = newNode;
    }

    addToTail(value) {
        let newNode = new Node(value, null, this.tail);

        if (this.tail) {
            this.tail.next = newNode;
        }
        else {
            this.head = newNode;
        }

        this.tail = newNode;
    }

    indexOf(value) {
        let currentNode  = this.head;
        let currentIndex = 0;

        let indexes = [];

        while(currentNode) {
            if (currentNode.value === value) {
                indexes.push(currentIndex);
            }

            currentNode = currentNode.next;
            currentIndex++;
        }

        return indexes;
    }

    removeHead() {
        if (!this.head) {
            return null;
        }

        let curHeadValue = this.head.value;

        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        }
        else {
            this.tail = null;
        }

        return curHeadValue;
    }

    removeTail() {
        if (!this.tail) {
            return null;
        }

        let curTailValue = this.tail.value;

        this.tail = this.tail.prev;

        if (this.tail) {
            this.tail.next = null;
        }
        else {
            this.head = null;
        }

        return curTailValue;
    }

    search(searchValue) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === searchValue) {
                return currentNode.value;
            }

            currentNode = currentNode.next;
        }

        return null;
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next  = next;
        this.prev  = prev;
    }
}

module.exports = LinkedList;
