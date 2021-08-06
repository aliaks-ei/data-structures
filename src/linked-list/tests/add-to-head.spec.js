const LinkedList = require('../linked-list');

/** Test cases on addToHead() method */
describe('Linked list: addToHead() method', () => {
  test('adds 1, 5, -7 consequiently to the tail of the list', () => {
    const ll = new LinkedList();

    ll.addToHead(1);
    ll.addToHead(5);
    ll.addToHead(-7);

    expect(ll.head.value).toBe(-7);
    expect(ll.head.prev).toBe(null);
    expect(ll.head.next.value).toBe(5);

    expect(ll.tail.value).toBe(1);
    expect(ll.tail.next).toBe(null);
    expect(ll.tail.prev.value).toBe(5);

    expect(ll.getSize()).toBe(3);
  });

  test('adds nothing if no value passed', () => {
    const ll = new LinkedList();

    ll.addToHead(-22);
    ll.addToHead('hello');
    ll.addToHead();

    expect(ll.head.value).toBe('hello');
    expect(ll.head.prev).toBe(null);
    expect(ll.head.next.value).toBe(-22);

    expect(ll.tail.value).toBe(-22);
    expect(ll.tail.next).toBe(null);
    expect(ll.tail.prev.value).toBe('hello');

    expect(ll.getSize()).toBe(2);
  });
});
