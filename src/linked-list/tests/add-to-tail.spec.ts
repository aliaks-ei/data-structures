import LinkedList from '../linked-list';

/** Test cases on addToTail() method */
describe('Linked list: addToTail() method', () => {
  test('adds 6, 11, -2 consequently to the tail of the list', () => {
    const ll = new LinkedList();

    ll.addToTail(6);
    ll.addToTail(11);
    ll.addToTail(-2);

    const tailValue = ll.getTail();
    const headValue = ll.getHead();

    expect(tailValue).toBe(-2);
    expect(headValue).toBe(6);
    expect(ll.getSize()).toBe(3);
  });

  test('adds nothing if no value passed', () => {
    const ll = new LinkedList();

    ll.addToTail(0);
    ll.addToTail(34);
    ll.addToTail();

    const tailValue = ll.getTail();
    const headValue = ll.getHead();

    expect(tailValue).toBe(34);
    expect(headValue).toBe(0);
    expect(ll.getSize()).toBe(2);
  });
});
