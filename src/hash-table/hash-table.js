class HashNode {
  constructor(key, value, next = null) {
    this.key   = key;
    this.value = value;
    this.next  = next;
  }
}

class HashTable {
  constructor(size) {
    this.buckets    = new Array(size);
    this.numBuckets = size;
  }

  get(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      return null;
    }

    let currentNode = this.buckets[index];

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  hash(key) {
    const keyLength = key.length;
    let total = 0;

    for (let i = 0; i < keyLength; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.numBuckets;
  }

  insert(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    }
    else if (this.buckets[index].key === key) {
      this.buckets[index].value = value;
    }
    else {
      let currentNode = this.buckets[index];

      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value;

          return;
        }

        currentNode = currentNode.next;
      }

      currentNode.next = new HashNode(key, value);
    }
  }

  retrieveAll() {
    let allNodes = [];

    for (let i = 0; i < this.numBuckets; i++) {
      let currentNode = this.buckets[i];

      while (currentNode) {
        allNodes.push(currentNode);

        currentNode = currentNode.next;
      }
    }

    return allNodes;
  }
}

module.exports = HashTable;
