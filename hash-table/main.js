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
    }

    class HashNode {
        constructor(key, value, next = null) {
            this.key   = key;
            this.value = value;
            this.next  = next;
        }
    }

    let myHT = new HashTable(30);

    console.log(myHT.hash('Becca'));

})();
