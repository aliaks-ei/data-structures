import LinkedList from '../linked-list';

/** Test cases on addToHead() method */
describe('Linked list: addToHead() method', () => {
  test('adds 1, 5, -7 consequently to the tail of the list', () => {
    const ll = new LinkedList();

    ll.addToHead(1);
    ll.addToHead(5);
    ll.addToHead(-7);

    const headValue = ll.getHead();
    const tailValue = ll.getTail();

    expect(headValue).toBe(-7);
    expect(tailValue).toBe(1);
    expect(ll.getSize()).toBe(3);
  });

  test('adds nothing if no value passed', () => {
    const ll = new LinkedList();

    ll.addToHead(-22);
    ll.addToHead('hello');
    ll.addToHead();

    const headValue = ll.getHead();
    const tailValue = ll.getTail();

    expect(headValue).toBe('hello');
    expect(tailValue).toBe(-22);
    expect(ll.getSize()).toBe(2);
  });
});
