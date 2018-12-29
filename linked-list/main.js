(function () {

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
    }

    class Node {
        constructor(value, next, prev) {
            this.value = value;
            this.next  = next;
            this.prev  = prev;
        }
    }

    let ll = new LinkedList();

    ll.addToHead(100);
    ll.addToTail(200);

    console.log(ll);
})();
