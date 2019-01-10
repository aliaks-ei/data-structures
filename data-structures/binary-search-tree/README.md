# Binary search tree

A [Binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree) is a binary tree in which nodes which have lesser value are stored on the left while the nodes with higher value are stored at the right.  
  
A binary search tree (BST) implemented here has following methods:

  - **_contains(value)_** - checks whether BST contains given ```value``` or not. Returns boolean. 
  - **_breadthFirstTraversal()_** - traverses through one entire level of children nodes first, then moving on to traverse through the grandchildren nodes and so on. Logs all nodes to the console.
  - **_depthFirstTraversal(order)_** - traverses through all nodes according to the ```order``` parameter and logs them to the console. Possible values of the ```order``` are:
    - _in-order_ - starts traversing the BST from the top and follows every branch down to its bottom before moves on to the next branch.
    - _pre-order_ - starts traversing the BST from the top, then goes down the left branch and then goes down the right branch.
    - _post-order_ - traverses through all of the left children, then all the right children and then the parent node.
  - **_getMaxVal()_** - returns the maximum value of the BST.
  - **_getMinVal()_** - returns the minimum value of the BST .
  - **_insert(value)_** - inserts given ```value``` into the BST.
