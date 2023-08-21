# Binary search tree

A [Binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree) is a binary tree in which nodes with lesser value are stored on the left while the nodes with higher value are stored at the right.  
  
A binary search tree (BST) implemented here has following methods:

  - `contains(value)` - checks whether BST contains given `value` or not. Returns boolean. 
  - `breadthFirstTraversal()` - traverses through one entire level of children nodes first, then moving on to traverse through the grandchildren nodes and so on. Logs all nodes to the console.
  - `depthFirstTraversal(order)` - traverses through all nodes according to the `order` parameter and logs them to the console. Possible values of the `order` are:
    - `in-order` - starts traversing the BST from the top and follows every branch down to its bottom before moves on to the next branch.
    - `pre-order` - starts traversing the BST from the top, then goes down the left branch and then goes down the right branch.
    - `post-order` - traverses through all of the left children, then all the right children and then the parent node.
  - `getMaxVal()` - returns the maximum value of the BST.
  - `getMinVal()` - returns the minimum value of the BST .
  - `insert(value)` - inserts given `value` into the BST.
