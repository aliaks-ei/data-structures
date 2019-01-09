(function () {

    class BST {
        constructor(value) {
            this.value = value;

            this.left  = null;
            this.right = null;
        }

        contains(value) {
            if (this.value === value) {
                return true;
            }
            
            if (value < this.value) {
                if (!this.left) {
                    return false;
                }
                else {
                    return this.left.contains(value);
                }
            }
            else {
                if (!this.right) {
                    return false;
                }
                else {
                    return this.right.contains(value);
                }
            }
        }

        breadthFirstTraversal(iteratorFunc) {
            let queue = [ this ];

            while (queue.length) {
                let treeNode = queue.shift();

                iteratorFunc(treeNode.value);

                if (treeNode.left) {
                    queue.push(treeNode.left);
                }

                if (treeNode.right) {
                    queue.push(treeNode.right);
                }
            }
        }

        depthFirstTraversal(iteratorFunc, order) {
            if (order === 'pre-order') {
                iteratorFunc(this.value);
            }

            if (this.left) {
                this.left.depthFirstTraversal(iteratorFunc, order)
            }

            if (order === 'in-order') {
                iteratorFunc(this.value);
            }

            if (this.right) {
                this.right.depthFirstTraversal(iteratorFunc, order);
            }

            if (order === 'post-order') {
                iteratorFunc(this.value);
            }
        }

        getMaxVal() {
            if (this.right) {
                return this.right.getMaxVal();
            }

            return this.value;
        }

        getMinVal() {
            if (this.left) {
                return this.left.getMinVal();
            }
            
            return this.value;
        }

        insert(value) {
            if (value <= this.value) {
                if (!this.left) {
                    this.left = new BST(value);
                }
                else {
                    this.left.insert(value);
                }
            }
            else {
                if (!this.right) {
                    this.right = new BST(value);
                }
                else {
                    this.right.insert(value);
                }
            }
        }
    }

    let bst = new BST(50);

    bst.insert(70);
    bst.insert(30);
    bst.insert(20);
    bst.insert(45);
    bst.insert(60);
    bst.insert(100);
    bst.insert(10);
    bst.insert(35);
    bst.insert(59);
    bst.insert(85);
    bst.insert(105);

    console.log('=== Depth First Traversal ===');
    bst.depthFirstTraversal(console.log, 'post-order');

    console.log('=== Breadth First Traversal ===');
    bst.breadthFirstTraversal(console.log);

    console.log('Min value: ', bst.getMinVal());
    console.log('Max value: ', bst.getMaxVal());

})();
