import LinkedList from '..';

/** Test cases on getHead() method */
describe('Linked list: getHead() method', () => {
  test('adds some items to the list and shows current head', () => {
    const ll = new LinkedList();

    ll.addToHead(0);
    ll.addToTail(1);
    ll.addToHead('2');
    ll.addToTail(null);

    expect(ll.getHead()).toBe('2');
  });

  test('returns null if list is empty', () => {
    const ll = new LinkedList();

    expect(ll.getHead()).toBe(null);
  });
});
