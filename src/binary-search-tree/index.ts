type DepthFirstTraversalOrder = 'pre-order' | 'in-order' | 'post-order';

interface IBinarySearchTree {
  contains(value?: number): boolean;
  breadthFirstTraversal(): void;
  depthFirstTraversal(order: DepthFirstTraversalOrder): void;
  getMaxVal(): number;
  getMinVal(): number;
  insert(value: number): void;
}

class BinarySearchTree implements IBinarySearchTree {
  private value: number;
  private left: BinarySearchTree | null;
  private right: BinarySearchTree | null;

  constructor(value: number) {
    this.value = value;

    this.left = null;
    this.right = null;
  }

  public contains(value?: number): boolean {
    if (!value) {
      return false;
    }

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

  public breadthFirstTraversal() {
    const queue = [this] as BinarySearchTree[];

    while (queue.length) {
      const treeNode = queue.shift();

      console.log(treeNode?.value);

      if (treeNode?.left) {
        queue.push(treeNode.left);
      }

      if (treeNode?.right) {
        queue.push(treeNode.right);
      }
    }
  }

  public depthFirstTraversal(order: DepthFirstTraversalOrder) {
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

  public getMaxVal(): number {
    if (this.right) {
      return this.right.getMaxVal();
    }

    return this.value;
  }

  public getMinVal(): number {
    if (this.left) {
      return this.left.getMinVal();
    }

    return this.value;
  }

  public insert(value: number) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      }
      else {
        this.left.insert(value);
      }
    }
    else {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      }
      else {
        this.right.insert(value);
      }
    }
  }
}

export default BinarySearchTree;
