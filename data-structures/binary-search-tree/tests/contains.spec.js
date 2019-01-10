const BST = require('../binary-search-tree');

/** Test suites on contains() method */
describe('Binary search tree: contains() method', () => {
    test('should return true for value 10', () => {
        let bst = new BST(7);

        bst.insert(22);
        bst.insert(5);
        bst.insert(10);
        bst.insert(9);
        bst.insert(5);

        expect(bst.contains(10)).toBe(true);
    });

    test('should return false for value 77', () => {
        let bst = new BST(7);

        bst.insert(22);
        bst.insert(5);
        bst.insert(10);
        bst.insert(9);
        bst.insert(5);

        expect(bst.contains(77)).toBe(false);
    });

    test('should return false for value 5 (only one value in BST)', () => {
        let bst = new BST(0);

        expect(bst.contains(5)).toBe(false);
    });
});
