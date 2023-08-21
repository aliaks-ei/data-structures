import BST from '..';

/** Test suites on getMaxVal() method */
describe('Binary search tree: getMaxVal() method', () => {
  test('should return 99 as max value', () => {
    const bst = new BST(5);

    bst.insert(22);
    bst.insert(-900);
    bst.insert(54);
    bst.insert(99);
    bst.insert(0);

    expect(bst.getMaxVal()).toBe(99);
  });

  test('should return 0 as max value', () => {
    const bst = new BST(-3);

    bst.insert(-6);
    bst.insert(-900);
    bst.insert(0);
    bst.insert(-1e8);

    expect(bst.getMaxVal()).toBe(0);
  });

  test('should return 1 as max value (BST contains only one value)', () => {
    const bst = new BST(1);

    expect(bst.getMaxVal()).toBe(1);
  });
});
