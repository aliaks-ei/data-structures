import LinkedList from '..';

/** Test cases on indexOf() method */
describe('Linked list: indexOf() method', () => {
  test('index of value 99 should be 1', () => {
    const ll = new LinkedList();

    ll.addToHead('head');
    ll.addToTail('tail');

    ll.addToHead();
    ll.addToTail(null);

    ll.removeHead();
    ll.removeTail();

    ll.addToHead(99);
    ll.addToHead(100);
    ll.addToTail(101);

    expect(ll.indexOf(99)).toEqual([ 1 ]);
  });

  test('indexes of value 50 should be [2, 4]', () => {
    const ll = new LinkedList();

    ll.addToHead(50);
    ll.addToHead(40);
    ll.addToTail(60);
    ll.addToTail(70);
    ll.addToHead(50);
    ll.addToHead(80);
    ll.addToHead(90);
    ll.addToHead(100);
    ll.addToTail(20);

    ll.removeHead();
    ll.removeTail();

    expect(ll.indexOf(50)).toEqual([ 2, 4 ]);
  });


  test('should return empty array (value not found in the list)', () => {
    const ll = new LinkedList();

    ll.addToHead('first');
    ll.addToTail('second');
    ll.addToTail('tail');
    ll.addToHead('head');

    ll.removeHead();
    ll.removeTail();

    expect(ll.indexOf('not in list')).toEqual([]);
  });

  test('should return empty array (by reason of empty list)', () => {
    const ll = new LinkedList();

    ll.addToHead(1e10);
    ll.addToTail(1e12);

    ll.removeHead();
    ll.removeTail();

    expect(ll.indexOf(1e10)).toEqual([]);
  });
});
