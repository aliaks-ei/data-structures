import LinkedList from '../linked-list';

/** Test cases on getTail() method */
describe('Linked list: getTail() method', () => {
  test('adds some items to the list and shows current tail', () => {
    const ll = new LinkedList();

    ll.addToTail(undefined);
    ll.addToHead();
    ll.addToTail('tail');
    ll.addToHead(22);
    ll.addToHead(-13);

    expect(ll.getTail()).toBe('tail');
  });

  test('returns null if list is empty', () => {
    const ll = new LinkedList();

    expect(ll.getTail()).toBe(null);
  });
});
