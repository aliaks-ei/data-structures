import HashTable from "..";

/** Test cases on get() and set() method */
describe("HashTable:", () => {
  describe("get() and set() methods", () => {
    test("should get correct values", () => {
      const hashTable = new HashTable(100);

      hashTable.set("Canada", 300);
      hashTable.set("France", 100);
      hashTable.set("Spain", 110);

      expect(hashTable.get("Canada")).toBe(300);
      expect(hashTable.get("France")).toBe(100);
      expect(hashTable.get("Spain")).toBe(110);
      expect(hashTable.get("Germany")).toBe(null);
    });
  });

  describe("remove() methods", () => {
    test("should remove correct values", () => {
      const hashTable = new HashTable(100);

      hashTable.set("Andrew", 300);
      hashTable.set("Florence", 100);
      hashTable.set("Paul", 110);

      expect(hashTable.remove("Andrew")).toBeTruthy();
      expect(hashTable.remove("Florence")).toBeTruthy();
      expect(hashTable.remove("Paul")).toBeTruthy();
      expect(hashTable.remove("Kate")).toBeFalsy();
    });
  });
});
