import LinkedList from '../linked-list';

/** Test cases on removeTail() method */
describe('Linked list: removeTail() method', () => {
  test('current tail value should equal to 10', () => {
    const ll = new LinkedList();

    ll.addToTail(5);
    ll.addToTail(10);
    ll.addToHead(20);
    ll.addToHead(15);
    ll.addToTail(25);

    expect(ll.removeTail()).toBe(25);
    expect(ll.getTail()).toBe(10);
  });

  test('current tail value should equal to "tail"', () => {
    const ll = new LinkedList();

    ll.addToTail('temp-tail');
    ll.addToTail('middle');
    ll.addToHead('tail');
    ll.addToHead('head');

    ll.addToHead();
    ll.removeTail();

    expect(ll.removeTail()).toBe('temp-tail');
    expect(ll.getTail()).toBe('tail');
  });

  test('current tail value should equal to null (empty list)', () => {
    const ll = new LinkedList();

    ll.addToTail(10);
    ll.addToTail(20);
    ll.addToTail(30);
    ll.addToTail(40);

    ll.removeHead();
    ll.removeTail();
    ll.removeTail();

    expect(ll.removeTail()).toBe(20);
    expect(ll.getTail()).toBe(null);
  });
});
