(function () {

    class HashTable {
        constructor(size) {
            this.buckets    = new Array(size);
            this.numBuckets = size;
        }

        hash(key) {
            let total = 0;
            let keyLength = key.length;

            for (var i = 0; i < keyLength; i++) {
                total += key.charCodeAt(i);
            }

            let bucket = total % this.numBuckets;

            return bucket;
        }

        insert(key, value) {
            let index = this.hash(key);

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
    }

    class HashNode {
        constructor(key, value, next = null) {
            this.key   = key;
            this.value = value;
            this.next  = next;
        }
    }

    let myHT = new HashTable(30);

    myHT.insert('Dean', 'dean@gmail.com');
    myHT.insert('Megan', 'megan@gmail.com');
    myHT.insert('Dane', 'dane@gmail.com');

    console.log(myHT.buckets);

})();
