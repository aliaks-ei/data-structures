const BST = require('../binary-search-tree');

/** Test suites on getMinVal() method */
describe('Binary search tree: getMinVal() method', () => {
    test('should return 2 as min value', () => {
        let bst = new BST(5);

        bst.insert(22);
        bst.insert(900);
        bst.insert(54);
        bst.insert(2);
        bst.insert(1e5);

        expect(bst.getMinVal()).toBe(2);
    });

    test('should return null as min value', () => {
        let bst = new BST(3);

        bst.insert(6);
        bst.insert(900);
        bst.insert(null);
        bst.insert(1e8);

        expect(bst.getMinVal()).toBe(null);
    });

    test('should return 1 as min value (BST contains only one value)', () => {
        let bst = new BST(1);

        expect(bst.getMinVal()).toBe(1);
    });
});
