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

      return this.left.contains(value);
    }
    else {
      if (!this.right) {
        return false;
      }

      return this.right.contains(value);
    }
  }

  breadthFirstTraversal() {
    const queue = [this];

    while (queue.length) {
      const treeNode = queue.shift();

      console.log(treeNode.value);

      if (treeNode.left) {
        queue.push(treeNode.left);
      }

      if (treeNode.right) {
        queue.push(treeNode.right);
      }
    }
  }

  depthFirstTraversal(order) {
    if (order === 'pre-order') {
      console.log(this.value);
    }

    if (this.left) {
      this.left.depthFirstTraversal(order)
    }

    if (order === 'in-order') {
      console.log(this.value);
    }

    if (this.right) {
      this.right.depthFirstTraversal(order);
    }

    if (order === 'post-order') {
      console.log(this.value);
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

module.exports = BST;
