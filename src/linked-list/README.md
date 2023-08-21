# Linked list

A [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list) is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains its value and two fields, called links, that are references to the previous and to the next node in the sequence of nodes.  
  
A doubly linked list implemented here has following methods:

  - `addToHead(value)` - creates a new node with a data value of `value` and adds it to the start of the list. Returns the new node. 
  - `addToTail(value)` - creates a new node with a data value of `value` and adds it to the end of the list. Returns the new node.
  - `getHead()` - returns the node at the `head` of the list.
  - `getSize()` - returns the size of the list.
  - `getTail()` - returns the node at the `tail` of the list.
  - `indexOf(value)` - finds an index (or indexes in case of multiple items have the same value) of `value`. Returns the index(es);
  - `removeHead()` - removes the current `head` from the list. Returns the value of the removed `head`. 
  - `removeTail()` - removes the current `tail` from the list. Returns the value of the removed `tail`.
  - `search(searchValue)` - searches for a node with specified `searchValue`. Return the value of node (or `null` if the node wasn't found).
