# Linked list

A [doubly linked list](https://www.tutorialspoint.com/data_structures_algorithms/doubly_linked_list_algorithm.htm) is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains its value and two fields, called links, that are references to the previous and to the next node in the sequence of nodes.  
  
A doubly linked list implemented here has following methods:

  - **_addToHead(value)_** - creates a new node with a data value of ```value``` and adds it to the start of the list. Returns the new node. 
  - **_addToTail(value)_** - creates a new node with a data value of ```value``` and adds it to the end of the list. Returns the new node.
  - **_getHead()_** - returns the node at the _head_ of the list.
  - **_getSize()_** - returns the size of the list.
  - **_getTail()_** - returns the node at the _tail_ of the list.
  - **_indexOf(value)_** - finds an index (or indexes in case of multiple items have the same value) of ```value```. Returns the index(es);
  - **_removeHead()_** - removes the current _head_ from the list. Returns the value of the removed _head_. 
  - **_removeTail()_** - removes the current _tail_ from the list. Returns the value of the removed _tail_.
  - **_search(searchValue)_** - searches for a node with specified ```searchValue```. Return the value of node (or null if the node wasn't found).
