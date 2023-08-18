interface ILinkedList {
  addToHead(value?: unknown): void;
  addToTail(value?: unknown): void;
  getHead(): unknown;
  getSize(): number;
  getTail(): unknown;
  indexOf(value: unknown): number[];
  removeHead(): unknown;
  removeTail(): unknown;
}

/** Constructor for List Node */
class ListNode {
  public value: unknown;
  public next: ListNode | null;
  public prev: ListNode | null;

  constructor(value: unknown, next: ListNode | null, prev: ListNode | null) {
    this.value = value;
    this.next  = next;
    this.prev  = prev;
  }
}

/** Constructor for Linked list */
class LinkedList implements ILinkedList {
  private head: ListNode | null;
  private tail: ListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public addToHead(value?: unknown) {
    if (value === undefined) return;

    const newNode = new ListNode(value, this.head, null);

    if (this.head) {
      this.head.prev = newNode;
    }
    else {
      this.tail = newNode;
    }

    this.head = newNode;
  }

  public addToTail(value?: unknown) {
    if (value === undefined) return;

    const newNode = new ListNode(value, null, this.tail);

    if (this.tail) {
      this.tail.next = newNode;
    }
    else {
      this.head = newNode;
    }

    this.tail = newNode;
  }

  public getHead() {
    let headValue = null;

    if (this.head) {
      headValue = this.head.value;
    }

    return headValue;
  }

  public getSize() {
    let currentNode = this.head;
    let size = 0;

    while (currentNode) {
      size++;

      currentNode = currentNode.next;
    }

    return size;
  }

  public getTail() {
    let tailValue = null;

    if (this.tail) {
      tailValue = this.tail.value;
    }

    return tailValue;
  }

  public indexOf(value: unknown) {
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

  public removeHead() {
    if (!this.head) {
      return null;
    }

    const curHeadValue = this.head.value;

    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    }
    else {
      this.tail = null;
    }

    return curHeadValue;
  }

  public removeTail() {
    if (!this.tail) {
      return null;
    }

    const curTailValue = this.tail.value;

    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    }
    else {
      this.head = null;
    }

    return curTailValue;
  }

  public search(searchValue: unknown) {
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

export default LinkedList;
