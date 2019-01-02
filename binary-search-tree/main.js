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

    console.log(bst.contains(20));

})();
