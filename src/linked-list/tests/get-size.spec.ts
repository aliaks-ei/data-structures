import LinkedList from '..';

/** Test cases on getSize() method */
describe('Linked list: getSize() method', () => {
  test('size should equal to 5', () => {
    const ll = new LinkedList();

    ll.addToHead('hi');
    ll.addToHead(234);
    ll.addToTail();
    ll.addToHead(-234234);
    ll.addToTail(null);
    ll.addToTail(1e8);

    expect(ll.getSize()).toBe(5);
  });

  test('size should equal to 3', () => {
    const ll = new LinkedList();

    ll.addToHead(1);
    ll.addToHead(2);

    ll.removeHead();

    ll.addToTail(null);
    ll.addToHead();
    ll.addToTail('tail');

    ll.removeTail();

    ll.addToHead('head');

    expect(ll.getSize()).toBe(3);
  });

  test('size should equal to 0 (list is empty)', () => {
    const ll = new LinkedList();

    ll.addToHead(1);
    ll.addToHead(2);

    ll.removeHead();
    ll.removeTail();

    expect(ll.getSize()).toBe(0);
  });
});
