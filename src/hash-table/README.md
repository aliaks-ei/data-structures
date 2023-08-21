# Hash table

A [hash table](https://en.wikipedia.org/wiki/Hash_table) s a data structure that implements an associative array or dictionary. It is an abstract data type that maps keys to values.
A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.
  
A hash table implemented here has following methods:

  - `get(key)` - returns value by provided `key`. Returns `null` if no `key` found.
  - `set(key, value)` - adds new key/value pair into hash table.
  - `remove(key)` - removes key/value pair from hash table by provided `key` and returns `true`. Return `false` if no `key` found.
  - `_hash(key)` - private method that transforms `key` into an index.
