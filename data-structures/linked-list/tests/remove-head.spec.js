const LinkedList = require('../linked-list');

/** Test cases on removeHead() method */
describe('Linked list: removeHead() method', () => {
    test('current head value should equal to 10', () => {
        let ll = new LinkedList();

        ll.addToHead(5);
        ll.addToHead(10);
        ll.addToTail(20);
        ll.addToTail(15);
        ll.addToHead(25);

        expect(ll.removeHead()).toBe(25);
        expect(ll.getHead()).toBe(10);
    });

    test('current head value should equal to "head"', () => {
        let ll = new LinkedList();

        ll.addToTail('temp-head');
        ll.addToTail('head');
        ll.addToTail('middle');
        ll.addToTail('tail');

        ll.addToHead();
        ll.removeTail();

        expect(ll.removeHead()).toBe('temp-head');
        expect(ll.getHead()).toBe('head');
    });

    test('current head value should equal to null (empty list)', () => {
        let ll = new LinkedList();

        ll.addToTail(10);
        ll.addToTail(20);
        ll.addToTail(30);
        ll.addToTail(40);

        ll.removeHead();
        ll.removeTail();
        ll.removeTail();

        expect(ll.removeHead()).toBe(20);
        expect(ll.getHead()).toBe(null);
    });
});
