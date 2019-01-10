const LinkedList = require('../linked-list');

/** Test cases on search() method */
describe('Linked list: search() method', () => {
    test('should successfully search for value 66', () => {
        let ll = new LinkedList();

        ll.addToTail(62);
        ll.addToTail(63);
        ll.addToHead(64);
        ll.addToHead(65);
        ll.addToTail('66');
        ll.addToHead(66);

        expect(ll.search(66)).toBe(66);
    });

    test('should not found value 100 in the list', () => {
        let ll = new LinkedList();

        ll.addToTail(20);
        ll.addToTail(98);
        ll.addToHead('head');
        ll.addToTail(100);
        ll.addToHead('new head');
        ll.addToTail();

        ll.removeHead();
        ll.removeTail();

        expect(ll.search(100)).toBe(null);
    });

    test('should not found value "hello world" in the list (empty list)', () => {
        let ll = new LinkedList();

        ll.addToHead("hello world");
        ll.addToTail("hello world");

        ll.removeHead();
        ll.removeTail();

        expect(ll.search("hello world")).toBe(null);
    });
});
