const LinkedList = require('../linked-list');

/** Test cases on addToTail() method */
describe('Linked list: addToTail() method', () => {
  test('adds 6, 11, -2 consequiently to the tail of the list', () => {
    const ll = new LinkedList();

    ll.addToTail(6);
    ll.addToTail(11);
    ll.addToTail(-2);

    expect(ll.tail.value).toBe(-2);
    expect(ll.tail.next).toBe(null);
    expect(ll.tail.prev.value).toBe(11);

    expect(ll.head.value).toBe(6);
    expect(ll.head.prev).toBe(null);
    expect(ll.head.next.value).toBe(11);

    expect(ll.getSize()).toBe(3);
  });

  test('adds nothing if no value passed', () => {
    const ll = new LinkedList();

    ll.addToTail(0);
    ll.addToTail(34);
    ll.addToTail();

    expect(ll.tail.value).toBe(34);
    expect(ll.tail.next).toBe(null);
    expect(ll.tail.prev.value).toBe(0);

    expect(ll.head.value).toBe(0);
    expect(ll.head.prev).toBe(null);
    expect(ll.head.next.value).toBe(34);

    expect(ll.getSize()).toBe(2);
  });
});
